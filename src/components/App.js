import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import data from '../mock/data';
import Search from '../components/SearchInput';
import Repositories from '../components/RepositoryList';
import DetailPage from '../components/RepositoryDetail';

const H1 = styled.h1`
  margin-top: 3rem;
  text-align: center;
`;

const Container = styled.main`
  width: 95%;
  max-width: 600px;
  margin: 2rem auto;
`;

function App() {
  return (
    <Router>
      <div>
        <H1>GitHub Explorer</H1>
        <Search onSearch={console.log} />
        <Container>
          <Route exact path="/" render={() => <Repositories list={data} />} />
          <Route path="/r/:owner/:repo" component={DetailPage} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
