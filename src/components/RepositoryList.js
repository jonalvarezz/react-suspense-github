import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeContext from '../theme/ThemeContext';
import { RepositoryType } from '../types';
import Repository from './RepositoryItem';
import data from '../mock/data';

const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;

const props = {};

const repositoryTypeKeys = Object.keys(RepositoryType);

const getItemProps = allProps =>
  repositoryTypeKeys.reduce((acc, curr) => {
    acc[curr] = allProps[curr];
    return acc;
  }, {});

function RepositoryList() {
  const theme = useContext(ThemeContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    window.setTimeout(() => {
      console.log('data is set');
      setList(data);
    }, 2000);
  }, []);

  return (
    <List>
      {list.map(item => (
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
