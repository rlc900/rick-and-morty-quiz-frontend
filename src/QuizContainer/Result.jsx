import React, { Component } from 'react';

class Result extends Component {

  renderCharacter = (points) => {
    if (points != null){
      if (points <= 10) {
        return this.imgTag("jerry.png", "Jerry")
      } else if (points === 11 || points <= 14){
        return this.imgTag("morty.png", "Morty")
      } else if (points === 15 || points <= 18){
        return this.imgTag("rick.png", "Rick")
      } else if (points === 19 || points <= 21){
        return this.imgTag("summer.png", "Summer")
      } else if (points === 22 || points <= 24){
        return this.imgTag("beth.png", "Beth")
      }
    } else {
      return null
    }
  }

   imgTag = (url, name) => {
    return (<>
    <img src={url} alt='images' className="result-img"/>
    <p>{name}</p>
    </>)
  }

  render() {
    console.log(this.props.totalPoints <= 10)
    return (
      <div>
      {this.renderCharacter(this.props.totalPoints)}
      </div>
    );
  }

}

export default Result;
