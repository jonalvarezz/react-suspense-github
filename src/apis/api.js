const apiPrefix = 'https://api.github.com';

const validateRateLimit = response => {
  if (response.headers.get('X-RateLimit-Remaining') === '0') {
    const epoch = parseInt(response.headers.get('X-RateLimit-Reset'), 10);
    const resetDate = new Date(epoch * 1000);
    throw new Error(
      `Doh... API rate limit has been reached. Please try again on: ${resetDate}`
    );
  }

  return response;
};

const validateStatus = response => {
  if (response.ok) return response;

  throw new Error(
    'There was an error with your request. Please try again later'
  );
};

const toJson = response => response.json();

export function fetchRepositoryByOwner(owner) {
  const promise = fetch(`${apiPrefix}/orgs/${owner}/repos`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json'
    }
  })
    .then(validateRateLimit)
    .then(response => {
      if (response.status === 404)
        throw new Error(
          'There was an error with your search param. Did you misspell it?'
        );

      return response;
    })
    .then(validateStatus)
    .then(toJson);

  return promise;
}
