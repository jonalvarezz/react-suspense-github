import React from 'react';
import data from '../mock/data';
import Search from '../components/SearchInput';
import Repositories from '../components/RepositoryList';

function App() {
  return (
    <div>
      <h1>GitHub Explorer</h1>
      <Search onSearch={console.log} />
      <Repositories list={data} />
      <style jsx>{`
        h1 {
          margin-top: 3rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default App;
