import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (evt) => {
    evt.preventDeafault()
    console.log(evt)
  }

  handleChange = (evt) => {
    console.log(evt)
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {username, password} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' autoComplete='off' name='username' value={username} onChange={this.handleChange}/>
        <label htmlFor='username'>Password:</label>
        <input type='text' autoComplete='off' name='password' value={password} onChange={this.handleChange}/>
        <input type='submit' value='Submit'
      </form>
    );
  }

}

export default Form;
