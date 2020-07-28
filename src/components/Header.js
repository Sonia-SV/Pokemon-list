import React from 'react';
import Logo from '../img/Pokemon-Symbol.jpg';
import '../stylesheets/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__tittle">Mi lista de</h1>
        <img className="header__logo" src={Logo} alt="Pokemon logo" />
      </div>
    );
  }
}

export default Header;
