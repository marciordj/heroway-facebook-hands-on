import './App.css';

import React from 'react';
import * as ReactRedux from 'react-redux';

import configureStore from '../redux/configureStore';
import Feed from './pages/Feed';

const store = configureStore();

const App: React.FC = () => {
  return (
    <ReactRedux.Provider store={store}>
      <section className="main">
        <Feed />
      </section>
    </ReactRedux.Provider>
  );
};

export default App;
