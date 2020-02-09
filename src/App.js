import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router'

import {withRouter} from 'react-router-dom'
import Form from './components/Form'

 class App extends React.Component {

  state = {
    user: {
      username: ''
    },
    token: ''
  }

  handleLoginSubmit = (userInfo) => {
    
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === '/login') {
      return <Form formName='Login Form' handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === 'signup') {
      return <Form formName='Signup Form' handleSubmit={this.handleSignupSubmit}/>
    }
  }

  render() {
    return (
      <div className="App">
      <Route path='/login' component={this.renderForm}
      <Route path='/signup' component={this.renderForm}
      </div>
    );
  }
}

export default withRouter(App);
