import React from 'react';
import * as ReactRedux from 'react-redux';

import configureStore from '../redux/configureStore';
import Header from './layout/Header';
import ProfileSidebar from './layout/ProfileSidebar';
import Feed from './pages/Feed';

const store = configureStore();

const App: React.FC = () => {
  return (
    <ReactRedux.Provider store={store}>
      <section className="main">
        <Header />
        <Feed />
        <ProfileSidebar />
      </section>
    </ReactRedux.Provider>
  );
};

export default App;
