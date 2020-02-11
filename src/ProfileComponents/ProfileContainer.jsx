import React, { Component } from 'react';


class ProfileContainer extends Component {

  render() {
    // console.log(this.props);
    let {user: {username}} = this.props
    return (
      <div>
      <h2>{username}&apos;s Profile</h2>
      </div>
    );
  }

}

export default ProfileContainer;
