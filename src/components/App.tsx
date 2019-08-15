import React from 'react';

import Header from './layout/Header';
import ProfileSidebar from './layout/ProfileSidebar';
import Feed from './pages/Feed';

const App: React.FC = () => {
  return (
    <section className="main">
      <Header />
      <Feed />
      <ProfileSidebar />
    </section>
  );
};

export default App;
