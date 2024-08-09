import React from 'react';
import Footer from 'components/Footer/Footer.tsx';
import Header from 'components/Header/Header.tsx';
import Main from 'components/Main/Main.tsx';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
