import React from 'react';
import './sass/main.scss';
import Main from './components/teststyle/Main';
import Side from './components/teststyle/Side';
import Shop from './components/teststyle/Shop';
import Menu from './components/teststyle/Menu';
import Footer from './components/teststyle/Footer';
import Galerie from './components/teststyle/Galerie';

const App = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="home">
          <Main />
          <Side />
          <Shop />
        </div>
        <Galerie />
      </div>
      <Footer />
    </>
  );
};
export default App;
