import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <ul className='nav-bar'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Signup</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
      </ul>
    );
  }

}

export default NavBar;
