import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  handleEntrance = () => {
    if (localStorage.token) {
      return (
        <div>
        <Menu secondary vertical={true} fixed='left'>
          <Menu.Item>
            <Link to='/' className='home'>Home</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to ='/profile' className='profile-link'>Profile</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to ='/update' className='update'>Update Username</Link>
          </Menu.Item>
          <Menu.Item>
           <Link to ='/logout' className='logout'>Logout</Link>
          </Menu.Item>
        </Menu>
        </div>
        )
      } else {
        return (
          <div>
          <Menu secondary vertical={true} fixed='left'>
            <Menu.Item>
              <Link to ='/' className='home'>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ='/signup' className='signup'>Signup</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ='/login' className='login'>Login</Link>
            </Menu.Item>
          </Menu>
        </div>
      )
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

// <Menu.Item>
//   <Link to='/quiz' className='take-quiz'>Take Quiz</Link>
// </Menu.Item>
