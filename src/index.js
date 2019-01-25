import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Theme, { defaultTheme } from './theme/ThemeContext';
import * as serviceWorker from './serviceWorker';
import 'isomorphic-unfetch';
import 'antd/dist/antd.css';

function Index() {
  return (
    <Theme.Provider value={defaultTheme}>
      <App />
    </Theme.Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
