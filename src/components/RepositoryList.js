import React, { useContext, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Breadcrumb from 'antd/lib/breadcrumb';

import { fetchReposByOwner } from '../apis/api';
import ThemeContext from '../theme/ThemeContext';
import { RepositoryType } from '../types';
import Repository from './RepositoryItem';
import Filters from './RepositoryFilters';

const repositoryTypeKeys = Object.keys(RepositoryType);

const getItemProps = allProps =>
  repositoryTypeKeys.reduce((acc, curr) => {
    acc[curr] = allProps[curr];
    return acc;
  }, {});

const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;

const propTypes = {
  // Router
  match: PropTypes.object
};

function RepositoryList({ match }) {
  const owner = match.params.owner;
  const theme = useContext(ThemeContext);
  const [list, setList] = useState([]);
  const [sortBy, setSort] = useState('stargazers_count');
  const [filterLanguageBy, setLanguages] = useState(['JavaScript']);

  useEffect(() => {
    fetchReposByOwner(owner).then(data => {
      if (Array.isArray(data)) setList(data);
    });
  }, []);

  const sortedData = useMemo(() => sortRepos(list, sortBy), [list, sortBy]);
  const filteredData = useMemo(
    () => filterRepos(sortedData, filterLanguageBy),
    [sortedData, filterLanguageBy]
  );

  return (
    <List>
      <h1>Repositories</h1>
      <RepoBreadcrumb owner={owner} />
      <Filters onSortChange={setSort} onLanguageChange={setLanguages} />
      {filteredData.map(item => (
        <Repository key={item.id} {...getItemProps(item)} theme={theme} />
      ))}
    </List>
  );
}
RepositoryList.propTypes = propTypes;
RepositoryList.defaultProps = {
  list: []
};

function sortRepos(arr, sortBy) {
  return arr.sort((a, b) => b[sortBy] - a[sortBy]);
}

function filterRepos(arr, filterBy) {
  return arr.filter(repo => {
    if (filterBy.length === 0) return true;
    return filterBy.indexOf(repo.language) > -1;
  });
}

function RepoBreadcrumb({ owner }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{owner}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default RepositoryList;
