import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../theme/ThemeContext';
import { RepositoryType } from '../types';
import Repository from './RepositoryItem';

const props = {
  list: PropTypes.arrayOf(PropTypes.object)
};

const repositoryTypeKeys = Object.keys(RepositoryType);

const getItemProps = allProps =>
  repositoryTypeKeys.reduce((acc, curr) => {
    acc[curr] = allProps[curr];
    return acc;
  }, {});

function RepositoryList({ list }) {
  const theme = useContext(ThemeContext);

  return (
    <ul>
      {list.map(item => (
        <Repository key={item.id} {...getItemProps(item)} theme={theme} />
      ))}

      <style jsx>{`
        ul {
          width: 95%;
          max-width: 600px;
          margin: 2rem auto;
          list-style: none;
          padding: 0;
        }
      `}</style>
    </ul>
  );
}
RepositoryList.propTypes = props;
RepositoryList.defaultProps = {
  list: []
};

export default RepositoryList;
