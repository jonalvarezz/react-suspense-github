import React, { useState, useEffect } from 'react';
import { fetchRepoBranches } from '../apis/api';
import PropTypes from 'prop-types';
import Breadcrumb from 'antd/lib/breadcrumb';
import { Link } from 'react-router-dom';
import Branches from './Branches';

const propTypes = {
  // Router
  match: PropTypes.object
};

function RepositoryDetail({ match }) {
  const { owner, repo } = match.params;
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    fetchRepoBranches(owner, repo).then(data => {
      if (Array.isArray(data)) setBranchList(data);
    });
  }, []);

  return (
    <article>
      <h1>Branches</h1>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/r/${owner}`}>{owner}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{repo}</Breadcrumb.Item>
      </Breadcrumb>
      <Branches {...match.params} list={branchList} />
    </article>
  );
}
RepositoryDetail.propTypes = propTypes;

export default RepositoryDetail;
