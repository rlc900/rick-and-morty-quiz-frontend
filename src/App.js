import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router'

import {withRouter} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'

 class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
    // This fetches to backend and persists
    // information on page refresh
  }

  handleLoginSubmit = (userInfo) => {
    // This function is going to be used to fetch
    // from the backend, making a POST request b/c
    // user is filling out a form.
    console.log('Login form submitted')
    fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    // .then(console.log)
    .then(newUserData => {
      if (newUserData.id) {
        this.setState({
          user: newUserData
        })
      }
    })
  }

  handleSignupSubmit = (userInfo) => {
    console.log('This has been submitted')
    fetch(`http://localhost:4000/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        // didn't use curlies because userInfo is an object already
        userInfo
      )
    })
    .then(r => r.json())
    // .then(console.log)
    .then(newUserData => {
      if (newUserData.id) {
        this.setState({
          user: newUserData
        })
      }
    })
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === '/login') {
      return <Form formName='Login Form' handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === '/signup') {
      return <Form formName='Signup Form' handleSubmit={this.handleSignupSubmit}/>
    }
  }

  render() {
    console.log(this.state, 'APP STATE')
    console.log(this.props, 'APP PROPS')
    return (
      <div className="App">
      <NavBar/>
      <p>
      This is working
      </p>
      <Route path='/login' component={this.renderForm}/>
      <Route path='/signup' component={this.renderForm}/>
      </div>
    );
  }
}

export default withRouter(App);
