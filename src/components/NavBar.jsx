import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends Component {

  handleEntrance = () => {
    if (localStorage.token) {
      return (
          <ul className='nav-bar'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/logout'>Logout</NavLink>
          </li>
          <li>
            <NavLink to='/quiz'>Take Quiz</NavLink>
          </li>
        </ul>
            )
    } else {
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
        </ul> )
    }
  }

  render() {
    return (
      <div>
      {this.handleEntrance()}
      </div>
    );
  }

}

export default NavBar;
