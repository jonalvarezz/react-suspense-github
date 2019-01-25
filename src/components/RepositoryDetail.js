import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // Router
  match: PropTypes.object
};

function RepositoryDetail({ match }) {
  return (
    <h1>
      {match.params.owner} -- {match.params.repo}
    </h1>
  );
}
RepositoryDetail.propTypes = propTypes;

export default RepositoryDetail;
