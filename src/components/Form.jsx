import React, { Component, Fragment } from 'react';

class Form extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (evt) => {

    evt.preventDefault()
    let path = window.location.pathname
    let userInfo = this.state

    if (path === '/login') {
      this.props.handleSubmit(userInfo, path, 'POST')
    } else if (path === '/signup') {
      this.props.handleSubmit(userInfo, "/users", 'POST')
    } else {
      this.props.handleSubmit({username: this.state.username}, `/users/${this.props.user.id}`, 'PATCH')
    }
    // path == "/login" ? this.props.handleSubmit(this.state, path, 'POST') : this.props.handleSubmit(this.state, "/users", 'POST')
  }

  handleChange = (evt) => {
    // console.log(evt)
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }


  render() {
    // console.log(this.props)
    let {username, password} = this.state
    let {formName} = this.props
    let path = window.location.pathname

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor='username'>Username:</label>
        <input type='text' autoComplete='off' name='username' value={username} onChange={this.handleChange}/>
        { path === '/update' ?
          null :
          <Fragment>
        <label htmlFor='username'>Password:</label>
        <input type='text' autoComplete='off' name='password' value={password} onChange={this.handleChange}/>
      </Fragment>}
        <input type='submit' value='Submit'/>
        <h2>{this.props.error}</h2>
      </form>
    );
  }

}

export default Form;
