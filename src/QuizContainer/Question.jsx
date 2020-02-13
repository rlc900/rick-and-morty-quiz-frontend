import React, { Component } from 'react';
import Result from './Result'

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

  handleClick = (value) => {
    // console.log('this is working')
    // console.log(value)
    // if whichQuestionCount === questions.length
    // setState()
    //
    let {whichQuestionCount, questionArr} = this.state
    this.setState({
      whichQuestionCount: this.state.whichQuestionCount + 1,
      points: this.state.points + value
    }, () => console.log(this.state))

    if(whichQuestionCount === questionArr.length) {
      this.setState({
        points: value
      })
    }
  }

  getQuestions = () => {
    // return this.state.questionArr.map(question => question.question_content)
    return this.state.questionArr.length !== 0 ? this.state.questionArr[this.state.whichQuestionCount].question_content : []
    // return this.state.questionArr[0].question_content
  }

  getAnswers = () => {
    // console.log(this.state.questionObj)
    // return this.state.questionArr.map(question => <li onClick={this.handleClick}>{question.getAnswers}</li>)
    return this.state.questionArr.length !== 0 ?
    this.state.questionArr[this.state.whichQuestionCount].getAnswers.map((answer, index) => <li onClick={() => this.handleClick(index + 1)}>{answer}</li>)
    :
    ""
  }

  renderResults = () => {
    // this function is supposed to render the users
    // result of the quiz. The result is the character
    // name that is based on the answers they chose

    // if (this.state.questionArr.length === 7) {
    //   <Results />
    // }
  }

  render() {
    // console.log(this.state.questionArr.map(question => console.log(question.getAnswers)))
    // debugger
    return (
      <div>
        {this.getQuestions() ? this.getQuestions():"goodbye" }
        <ol>{this.getQuestions() ? this.getAnswers() : 'you failed'}</ol>
      </div>

    );
  }

}

export default Question;
