import React, { Component } from 'react';

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
      <h2>{username}&apos;s Profile</h2>
      <button onClick={this.handleClick}>Delete Profile :/</button>
      </div>
    );
  }

}

export default Profile;
