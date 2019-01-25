import PropTypes from 'prop-types';

export const RepositoryType = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  forks: PropTypes.number,
  watchers_count: PropTypes.number,
  stargazers_count: PropTypes.number,
  language: PropTypes.string,
  homepage: PropTypes.string
};
