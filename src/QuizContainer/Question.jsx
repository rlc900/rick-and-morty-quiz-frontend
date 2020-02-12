import React, { Component } from 'react';

class Question extends Component {
  state = {
    questionArr: [],
    whichQuestionCount: 0,
    points: 0

  }

  componentDidMount() {
    // grabs all the q's
    fetch(`http://localhost:4000/questions`)
      .then(r => r.json())
      // .then(console.log)
      .then(questionData => {
        let questions = questionData
        this.setState({questionArr: questions})
        // console.log(questionData)
      })
  }

  handleClick = (evt) => {
    // console.log('this is working')
    // this.state.whichQuestionCount = 12
    this.setState({
      whichQuestionCount: this.state.whichQuestionCount + 1
    })
  }

  getQuestions = () => {
    // return this.state.questionArr.map(question => question.question_content)
    return this.state.questionArr.length !== 0 ? this.state.questionArr[this.state.whichQuestionCount].question_content : []
    // return this.state.questionArr[0].question_content
  }

  getAnswers = () => {
    // console.log(this.state.questionObj)
    // return this.state.questionArr.map(question => <li onClick={this.handleClick}>{question.getAnswers}</li>)
    return this.state.questionArr.length !== 0 ? <li onClick={this.handleClick}>{this.state.questionArr[this.state.whichQuestionCount].getAnswers}</li> : ""
  }

  render() {
    // console.log(this.state.questionArr.map(question => console.log(question.getAnswers)))
    // debugger
    return (
      <div>
        {this.getQuestions() ? this.getQuestions():"goodbye" }
        <h1>{this.getQuestions() ? this.getAnswers() : 'you failed'}</h1>
      </div>

    );
  }

}

export default Question;
