import React, { Component } from 'react';
// import image from './get_schwifty.png'

class Home extends Component {

  render() {
    return (
      <div>
      <h1 className='home-h1'>Rick and Morty Quiz App</h1>
      <h2 className='home-h2'>Signup or Login to find out, broh!</h2>
      <img src='rick_and_morty.jpg' alt='Rick and Morty staring into oblivion'/>
      </div>
    );
  }

}

export default Home;
