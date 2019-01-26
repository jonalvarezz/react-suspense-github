import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import styled from 'styled-components';

const Option = Select.Option;

const languages = [
  'JavaScript',
  'PHP',
  'Java',
  'Python',
  'HTML',
  'Ruby',
  'Objective-C',
  'CSS',
  'Swift',
  'C#'
];
const LanguageOptions = languages.map(l => (
  <Option key={l} value={l}>
    {l}
  </Option>
));

const sorters = [
  { value: 'stargazers_count', children: 'Stars' },
  { value: 'forks', children: 'Forks' }
];
const SortersOptions = sorters.map(s => <Option {...s} key={s.value} />);

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-column-template: 1fr 1fr;
  grid-gap: 15%;
  margin: 3rem 0 1rem;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    white-space: nowrap;
    padding-right: 8px;
  }

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const propTypes = {
  onSortChange: PropTypes.func,
  onLanguageChange: PropTypes.func
};

function RepositoryFilters({ onSortChange, onLanguageChange }) {
  return (
    <Container>
      <Col>
        <span>Languages: </span>
        <Select
          mode="multiple"
          style={{ width: '100%', minWidth: '180px' }}
          placeholder="Please select"
          onChange={onLanguageChange}
        >
          {LanguageOptions}
        </Select>
      </Col>
      <Col>
        <span>Sort by: </span>
        <Select
          style={{ width: '100%' }}
          defaultValue="stargazers_count"
          onChange={onSortChange}
        >
          {SortersOptions}
        </Select>
      </Col>
    </Container>
  );
}
RepositoryFilters.propTypes = propTypes;

export default RepositoryFilters;
