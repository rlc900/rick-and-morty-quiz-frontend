import React, { Component } from 'react';
import {Card, Image} from 'semantic-ui-react'

class Result extends Component {

  renderCharacter = (points) => {
    if (points != null){
      if (points <= 10) {
        return this.imgTag("jerry.jpg", "Jerry")
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
    return (
      <Card>
   <Image src={url} wrapped ui={false} />
   <Card.Content>
     <Card.Header>{name}</Card.Header>
     <Card.Meta>
       <span className='date'>Joined in 2015</span>
     </Card.Meta>
     <Card.Description>
       Matthew is a musician living in Nashville.
     </Card.Description>
   </Card.Content>
   <Card.Content extra>
   </Card.Content>
 </Card>
    )
  }

  render() {
    console.log(this.props.totalPoints <= 10)
    return (
      <div>
      <h1 className='result'>You are:</h1>
        {this.renderCharacter(this.props.totalPoints)}
      </div>
    );
  }

}

export default Result;
  // {this.renderCharacter(this.props.totalPoints)}
