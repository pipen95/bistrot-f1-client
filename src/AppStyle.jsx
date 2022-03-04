import React from 'react';
import './sass/main.scss';
import Main from './components/teststyle/Main';
import Menu from './components/teststyle/Menu';

const App = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="home">
          <div className="Main">
            <Main />
          </div>
          <div className="Chat">
            <h1>Chat Section</h1>
          </div>
          <div className="Media">
            <h1>Media</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
