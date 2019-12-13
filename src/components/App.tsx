import React from 'react';

import Header from './layout/Header';
import Feed from './pages/Feed';

const App: React.FC = () => {
  return (
    <section className="main">
      <Header />
      {/* <Login /> */}
      <Feed />
    </section>
  );
};

export default App;
