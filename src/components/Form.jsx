import React, { Component, Fragment } from 'react';
import { Header, Form } from 'semantic-ui-react'

class UserForm extends Component {

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
        <Header className='form-name'>{formName}</Header>
        <label htmlFor='username' className='username'>Username:</label>
        <input type='text' autoComplete='off' name='username' value={username} onChange={this.handleChange}/>
        { path === '/update' ?
          null :
          <Fragment>
        <label htmlFor='username' className='password'>Password:</label>
        <input type='password' autoComplete='off' name='password' value={password} onChange={this.handleChange}/>
      </Fragment>}

        <h2>{this.props.error}</h2>
        <Form.Button basic inverted color='white'>Submit</Form.Button>
      </form>
    );
  }

}

export default UserForm;

  // <input className='submit' type='submit' value='Submit'/>
