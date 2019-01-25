import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';

const propTypes = {
  onSearch: PropTypes.func
};

function SearchInput({ onSearch }) {
  const [value, setValue] = useState('');

  const onChange = ({ target }) => setValue(target.value);

  const onSubmit = event => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        size="large"
        value={value}
        onChange={onChange}
        placeholder="Company GitHub respository"
        prefix={<Icon type="github" style={{ color: 'rgba(0,0,0,.25)' }} />}
        className="SearchInput"
      />

      <style jsx>{`
        form {
          width: 95%;
          margin: 0 auto;
          max-width: 500px;
        }
        form :global(.SearchInput) {
          height: 50px;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </form>
  );
}
SearchInput.propTypes = propTypes;

export default SearchInput;
