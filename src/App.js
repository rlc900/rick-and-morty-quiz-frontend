import React from 'react';
import './App.css';
import {Route} from 'react-router'

import {withRouter} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import ProfileContainer from './ProfileComponents/ProfileContainer'

 class App extends React.Component {

  state = {
    user: {
      quizzes: []
    },
    token: ''
  }

  componentDidMount() {
    // This fetches to backend and persists
    // information on page refresh
    // I want information persisted when I refresh the page
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')

      fetch(`http://localhost:4000/persist`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
      .then(r => r.json())
      // .then(console.log)
      .then((userData) => {
        if(userData.token) {
          localStorage.setItem('token', userData.token)
          this.setState({
            user: userData.user,
            token: userData.token
          }, () => {
            this.props.history.push('/profile')
          })
        }
      })
    }
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
    .then(userData => {
      // console.log(userData)
      if (!userData.errors) {
        // save token key to newUserData.token
        localStorage.setItem('token', userData.token)
        this.setState({
          user: userData.user
        }, this.props.history.push('/profile'))
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

  renderProfile = () => {
    return <ProfileContainer token={this.state.token} user={this.state.user}/>
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
      <Route path='/profile' component={this.renderProfile}/>
      </div>
    );
  }
}

export default withRouter(App);
