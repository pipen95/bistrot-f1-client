import React from 'react';

const Menu = () => {
  return (
    <div classNameName="Menu">
      <nav className="nav">
        <div className="nav__logo">
          <a>
            <img
              src="https://res.cloudinary.com/pipen95/image/upload/v1560599032/Cheese-bird/img/Cheese-bird.jpg"
              alt="logo"
              className="nav__logo__img"
            />
          </a>
          <h1>F1 Bistro</h1>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link">How it works</a>
          </li>
          <li className="nav__item">
            <a className="nav__link">Boxes</a>
          </li>
          <li className="nav__item">
            <a className="nav__link">Subscribe</a>
          </li>
          <li className="nav__item">
            <a className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
