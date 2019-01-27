import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from '../components/SearchInput';

const Repositories = lazy(() => import('../components/RepositoryList'));
const DetailPage = lazy(() => import('../components/RepositoryDetail'));

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
        <Route
          render={({ history }) => (
            <div>
              <H1>GitHub Explorer</H1>
              <Search onSearch={history.push} />
            </div>
          )}
        />
        <Container>
          <Suspense maxDuration={1000} fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/r/:owner" component={Repositories} />
              <Route path="/r/:owner/:repo" component={DetailPage} />
            </Switch>
          </Suspense>
        </Container>
      </div>
    </Router>
  );
}

export default App;
