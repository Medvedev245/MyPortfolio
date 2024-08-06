import React from 'react';
import Footer from '../Footer/Footer.tsx';
import Header from '../Header/Header.tsx';

export const App: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Header />
      React homework template
      <Footer />
    </div>
  );
};
