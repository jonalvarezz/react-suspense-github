import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'antd/lib/icon';
import { RepositoryType } from '../types';

const ContainerBase = styled.li`
  padding: 20px;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 45% auto;
  align-items: center;
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;

  i + span {
    margin-left: 3px;
  }
`;

const propTypes = {
  ...RepositoryType,
  theme: PropTypes.object
};

const fixNumber = number => {
  const length = number.toString().length;
  if (length < 4) return number;

  const newNumberStr = `${parseInt(number / 1000, 10)}K`;

  return newNumberStr;
};

function RepositoryItem({ theme, ...props }) {
  const Container = styled(ContainerBase)`
    border: 1px solid ${theme.borderColorBase};
  `;
  const linksTo = `/r/${props.full_name}`;

  return (
    <Container>
      <div>
        <h3 style={{ margin: '0' }}>
          <Link to={linksTo}>{props.name}</Link>
        </h3>
        <p>{props.description}</p>
      </div>
      <Stats>
        <div>
          <Icon type="star" />
          <span>{fixNumber(props.stargazers_count)}</span>
        </div>
        <div>
          <Icon type="copy" />
          <span>{fixNumber(props.forks)}</span>
        </div>
        <div>
          <Icon type="eye" />
          <span>{fixNumber(props.watchers_count)}</span>
        </div>
      </Stats>
    </Container>
  );
}
RepositoryItem.propTypes = propTypes;

export default RepositoryItem;
