import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

class Profile extends Component {


  handleClick = () => {
    // console.log('dis werks')
    this.props.handleDelete(this.props.user.id)
  }

  render() {
    // console.log(this.props);
    let {user: {username}} = this.props
    return (
      <div>
      <h1 className='profile'>{username}&apos;s Profile</h1>
      <h1 className='results'>Results:</h1>

      <h3><Button
      className='delete-button'
      basic inverted color='white'
      onClick={this.handleClick}>Delete Profile</Button></h3>
      </div>
    );
  }

}

export default Profile;
