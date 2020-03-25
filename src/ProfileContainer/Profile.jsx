import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

class Profile extends Component {


  handleClick = () => {
    // console.log('dis werks')
    // I want this function
    this.props.handleDelete(this.props.user.id)
  }

  render() {
    // console.log(this.props);
    let {user: {username}} = this.props
    return (
      <div>
      <h1 className='profile'>{username}&apos;s Profile</h1>
      <h2 className='quiz'><Link to='/quiz'>Which Rick & Morty Character are you?</Link></h2>
      <h3><Button classname='delete-button' onClick={this.handleClick}>Delete Profile</Button></h3>
      </div>
    );
  }

}

export default Profile;
