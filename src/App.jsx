import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Vote from './components/vote/Vote';
import Standings from './components/standings/Standings';
import Home from './components/Home';
import Menu from './components/Menu';
import AuthService from './services/auth.service';

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };


  return (
    <div className="App">
      <Menu currentUser={currentUser} logOut={logOut}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/standings" element={<Standings />} />
        <Route exact path="/vote" element={<Vote />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default App;
