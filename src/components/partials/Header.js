import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const Header= () => {

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand">React CRUD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">

            <NavItem to="/" linkText="Home"></NavItem>
            <NavItem to="/customers" linkText="Customers"></NavItem>
            
          </ul>
        </div>
      </div>
    </nav>
  );


}

export default Header