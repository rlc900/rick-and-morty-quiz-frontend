import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
      <h2 className='profile'>{username}&apos;s Profile</h2>
      <Link to='/quiz'>Which Rick & Morty Character are you?</Link>
      <button classname='delete-button' onClick={this.handleClick}>Delete Profile :/</button>
      </div>
    );
  }

}

export default Profile;
