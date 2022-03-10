import React from 'react';
const Menu = () => {
  return (
    <div className="Menu">
      <nav className="nav">
        <div className="nav__logo">
          <a>
            <img
              src="./img/check-chair-blue-volant-bis.png"
              alt="logo"
              className="nav__logo--img"
            />
          </a>
          <h1 className="nowrap">F1 Bistro</h1>
        </div>
        <div classeName="nav_container">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Game
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Standings
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Shop
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Login
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
