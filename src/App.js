import React from 'react';
import './App.css';
import {Route} from 'react-router'

import {withRouter} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Profile from './ProfileContainer/Profile'
import Question from './QuizContainer/Question'

 class App extends React.Component {

  state = {
    user: {},
    token: '',
    error_message: '',

  }


  componentDidMount() {
    // this.renderQuestions()
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
      if (!userData.error) {
        // save token key to newUserData.token
        localStorage.setItem('token', userData.token)
        this.setState({
          user: userData.user,
          token: userData.token
        }, () => {
          this.props.history.push('/profile')
        })
      }
      this.setState({
        error_message: userData.error
      })
    })
  }

  handleSignupSubmit = (userInfo) => {
    console.log('Signup form submitted')
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
      if (!newUserData.error) {
        this.setState({
          user: newUserData.user,
          token: newUserData.token
        }, () => {
          this.props.history.push('/profile')
        })
      }
      this.setState({
        error_message: newUserData.error
      })
    })
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === '/login') {
      return <Form formName='Login' handleSubmit={this.handleLoginSubmit} error={this.state.error_message}/>
    } else if (routerProps.location.pathname === '/signup') {
      return <Form formName='Signup' handleSubmit={this.handleSignupSubmit} error={this.state.error_message}/>
    }
  }

  renderProfile = () => {
    return <Profile token={this.state.token} user={this.state.user}/>
  }

  renderLogout = (routerProps) => {
      this.setState({
        user: {}
      })
    localStorage.clear()
    routerProps.history.push('/signup')
  }

  render() {
    // console.log(this.state, 'APP STATE')
    // console.log(this.props, 'APP PROPS')
    return (
      <div className="App">
      <NavBar/>

      <Route path="/" exact render={() => <Home /> } />
      <Route path='/login' render={this.renderForm}/>
      <Route path='/signup' render={this.renderForm}/>
      <Route path='/profile' render={this.renderProfile}/>
      <Route path='/logout' render={this.renderLogout}/>
      <Route path='/quiz' component={Question}/>
      </div>
    );
  }
}

export default withRouter(App);
