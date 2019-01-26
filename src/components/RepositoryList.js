import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeContext from '../theme/ThemeContext';
import { RepositoryType } from '../types';
import Repository from './RepositoryItem';
import data from '../mock/data';

const props = {};
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

function RepositoryList() {
  const theme = useContext(ThemeContext);
  const [list, setList] = useState([]);
  const [sortBy] = useState('stargazers_count');
  const [filterLanguageBy] = useState('JavaScript');

  useEffect(() => {
    window.setTimeout(() => {
      console.log('data is set');
      setList(data);
    }, 2000);
  }, []);

  const sortedData = list.sort((a, b) => b[sortBy] - a[sortBy]);
  const filteredData = sortedData.filter(repo => {
    if (!filterLanguageBy) return true;
    return repo.language === filterLanguageBy;
  });

  return (
    <List>
      {filteredData.map(item => (
        <Repository key={item.id} {...getItemProps(item)} theme={theme} />
      ))}
    </List>
  );
}
RepositoryList.propTypes = props;
RepositoryList.defaultProps = {
  list: []
};

export default RepositoryList;
