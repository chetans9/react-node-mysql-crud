import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom'

const NavItem= (props) => {

  const location = useLocation();
  let activeClass = location.pathname == props.to ? 'nav-item active' : 'nav-item';
  return (
    <li className={activeClass}>
         <Link className="nav-link" to ={props.to}>{props.linkText}</Link>
    </li>
   
  )
};

export default NavItem;