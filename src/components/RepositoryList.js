import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Breadcrumb from 'antd/lib/breadcrumb';

import ThemeContext from '../theme/ThemeContext';
import { RepositoryType } from '../types';
import Repository from './RepositoryItem';
import Filters from './RepositoryFilters';
import data from '../mock/data';

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
  const theme = useContext(ThemeContext);
  const [list, setList] = useState([]);
  const [sortBy, setSort] = useState('stargazers_count');
  const [filterLanguageBy, setLanguages] = useState(['JavaScript']);

  useEffect(() => {
    window.setTimeout(() => {
      console.log('data is set');
      setList(data);
    }, 2000);
  }, []);

  const sortedData = list.sort((a, b) => b[sortBy] - a[sortBy]);
  const filteredData = sortedData.filter(repo => {
    if (filterLanguageBy.length === 0) return true;
    return filterLanguageBy.indexOf(repo.language) > -1;
  });

  return (
    <List>
      <RepoBreadcrumb owner={match.params.owner} />
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
