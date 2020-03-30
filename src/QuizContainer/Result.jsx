import React, { Component } from 'react';
import {Card, Image, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class Result extends Component {


  renderCharacter = (points) => {
    if (points != null){
      if (points <= 10) {
        return this.imgTag("jerry.jpg", "Jerry", 'You\'re Jerry! Jerry is sometimes misguided by his insecurities, and could be a bit self-centered at times. Despite this, he has the ability to channel his inner strength to conquer his darkest fears, and at the end of the day always does whats best for his family.')
      } else if (points === 11 || points <= 14){
        return this.imgTag("morty.png", "Morty", 'You\'re Morty! Morty is a well-behaved impressionable teenage boy that is easily manipulated from time to time, mostly by his grandfather Rick. However, he stands up for himself when he\'s pushed over the edge, and will so absolutely anything for the people he loves.')
      } else if (points === 15 || points <= 18){
        return this.imgTag("rick.png", "Rick", 'Wuuubba lubba dub dub! Rick is the most billiant man in the whole universe, from creating devices that produce portals to different dimensions to interdimensional cable TV boxes. His brillance gets tampered with frquently due to his alcohol addiction and harsh personal views. He has a tendency to be possessive and dominating towards Morty when they go on adventures, but as much as he hates to admit it, Ricks love for Morty and their memories will never die.')
      } else if (points === 19 || points <= 21){
        return this.imgTag("summer.png", "Summer", 'You\'re so totally Summer. Summer is an average teenage girl that loves social media & popularity. She views her family as a dysfunctional one, and will sometimes get jealous of Rick and Morty\'s relationship. She could have sociopathic/narcissistic attitudes when she is pushed too far, similar to her brother. She\'s not as cold as she seems, and in fact cares about her family more than anyone. She once stated that she would rather live in an isolated existence without a future rather than abadoning Rick, and reminded her father Jerry \'You don\'t love someone for a reward.\'')
      } else if (points === 22 || points <= 24){
        return this.imgTag("beth.png", "Beth", 'You\'re Beth! Beth is a dedicated horse surgeon who admires her father, Rick. She too has alcoholic tendencies like him, however has a bit more control. She\'s very ambitious, independent, and caring even though she views emotional vulnerability as a weakness. Despite those views, her family is always her top priority. ')
      }
    } else {
      return null
    }
  }

   imgTag = (url, name, desc) => {

     let resultCard = <Card>
    <Image src={url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {desc}
      </Card.Description>
      <Button onClick={ () => this.handleClick(name)}>Save Result</Button>
    </Card.Content>
  </Card>
    return resultCard
  }

  handleClick = (name) => {
    // I want this function to add the character card
    // to users profile page.
    // let {result} = this.state
    // console.log(name)
    fetch(`http://localhost:4000/user_quizzes`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then(r => r.json())
    // .then(console.log)
    .then(result => {
      this.props.history.push('/profile')
      this.props.setName(result)
    })

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

export default withRouter(Result);
  // {this.renderCharacter(this.props.totalPoints)}
