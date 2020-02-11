import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (evt) => {

    evt.preventDefault()

    this.props.handleSubmit(this.state)
  }

  handleChange = (evt) => {
    // console.log(evt)
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }


  render() {
    // console.log(this.state)
    let {username, password} = this.state
    let {formName} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor='username'>Username:</label>
        <input type='text' autoComplete='off' name='username' value={username} onChange={this.handleChange}/>
        <label htmlFor='username'>Password:</label>
        <input type='text' autoComplete='off' name='password' value={password} onChange={this.handleChange}/>
        <input type='submit' value='Submit'/>
        <h2>{this.props.error}</h2>
      </form>
    );
  }

}

export default Form;
