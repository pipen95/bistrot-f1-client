import React from 'react';
const Menu = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src="./img/check-chair-blue-volant.png"
          alt="logo"
          className="footer__logo"
        />
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Acceuil
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  A propos
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            &copy;2018 Aidactiv. Tous droits réservés. Site web réalisé par
            <a
              href="https://github.com/pipen95"
              target="blank"
              className="footer__link"
            >
              Pipen95
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Menu;
