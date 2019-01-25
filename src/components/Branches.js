import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import branches from '../mock/branches';

const List = styled.ul`
  margin: 2rem auto;
  padding: 0;
  width: 100%;
  max-width: 500px;
  li {
    padding: 5px 0;
  }
`;

const branchProps = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string,
  repo: PropTypes.string
};

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(branchProps)),
  owner: PropTypes.string,
  repo: PropTypes.string
};

function Branches({ list, ...branchProps }) {
  return (
    <List>
      {list.map(b => (
        <Branch key={b.name} {...branchProps} {...b} />
      ))}
    </List>
  );
}
branches.propTypes = propTypes;

function Branch({ name, owner, repo }) {
  const title = `View ${name} on GitHub`;
  const link = `https://github.com/${owner}/${repo}/tree/${name}`;
  return (
    <li>
      <a target="_blank" rel="noopener noreferrer" title={title} href={link}>
        {name}
      </a>
    </li>
  );
}
Branch.propTypes = branchProps;

export default Branches;
