import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

class Profile extends Component {


  handleClick = () => {
    // console.log('dis werks')
    this.props.handleDelete(this.props.user.id)
  }

  // componentDidMount() {
  //   fetch(`http://localhost:4000/user_quizzes`)
  //     .then(r => r.json())
  //     // .then(console.log)
  // }

  render() {
    console.log(this.props.user);
    let {user: {username}} = this.props
    // let {results} = this.props.user
    return (
      <div>
      <h1 className='profile'>{username}&apos;s Profile</h1>
      <h1 className='results'>Results:</h1>
        <h2>{this.props.user.results ? this.props.user.results.map((result) => {
        return <p className='name'>{result}</p>
      }) : null}</h2>
      <h3><Button
      className='delete-button'
      basic inverted color='white'
      onClick={this.handleClick}>Delete Profile</Button></h3>
      </div>
    );
  }

}

export default Profile;
