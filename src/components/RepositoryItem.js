import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';
import { RepositoryType } from '../types';

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
  return (
    <li className="container">
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="stats">
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
      </div>

      <style jsx>{`
        h3 {
          margin: 0;
        }
        .container {
          padding: 20px;
          border: 1px solid ${theme.borderColorBase};
          margin-bottom: 1rem;
          display: grid;
          grid-template-columns: 45% auto;
          align-items: center;
        }
        .stats {
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 1rem;
        }
        .stats :global(i + span) {
          margin-left: 3px;
        }
      `}</style>
    </li>
  );
}
RepositoryItem.propTypes = propTypes;

export default RepositoryItem;
