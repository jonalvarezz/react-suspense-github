import React from 'react';
import styled from 'styled-components';
import data from '../mock/data';
import Search from '../components/SearchInput';
import Repositories from '../components/RepositoryList';

const H1 = styled.h1`
  margin-top: 3rem;
  text-align: center;
`;

function App() {
  return (
    <div>
      <H1>GitHub Explorer</H1>
      <Search onSearch={console.log} />
      <Repositories list={data} />
    </div>
  );
}

export default App;
