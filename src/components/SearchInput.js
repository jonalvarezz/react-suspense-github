import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';

const Form = styled.form`
  width: 95%;
  margin: 0 auto;
  max-width: 500px;
  .SearchInput {
    height: 50px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const propTypes = {
  onSearch: PropTypes.func
};

function SearchInput({ onSearch }) {
  const [value, setValue] = useState('');

  const onChange = ({ target }) => setValue(target.value);

  const onSubmit = event => {
    event.preventDefault();
    onSearch(`/r/${value}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        size="large"
        value={value}
        onChange={onChange}
        placeholder="Company GitHub respository"
        prefix={<Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />}
        className="SearchInput"
      />
    </Form>
  );
}
SearchInput.propTypes = propTypes;

export default SearchInput;
