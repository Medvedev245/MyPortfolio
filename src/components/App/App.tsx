import React from 'react';
import Footer from '../Footer/Footer.tsx';
import Header from '../Header/Header.tsx';
import Main from 'components/Main/Main.tsx';

export const App: React.FC = () => {
  return (
    <div className=" flex flex-col w-1200">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// export default App;
