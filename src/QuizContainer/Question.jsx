import React, { Component } from 'react';
import Result from './Result'

class Question extends Component {
  state = {
    questionArr: [],
    whichQuestionCount: 0,
    points: null

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
    this.setState({
      whichQuestionCount: this.state.whichQuestionCount + 1,
      points: this.state.points + value
    }, () => console.log(this.state.whichQuestionCount))
  }

  getQuestions = () => {
    // return this.state.questionArr.map(question => question.question_content)
    // console.log(this.state.questionArr[this.state.whichQuestionCount].question_content)
    console.log("QUESTOIN ARR", this.state.questionArr[this.state.whichQuestionCount])
    return this.state.questionArr.length !== 0 ? this.state.questionArr[this.state.whichQuestionCount].question_content : []

    // return this.state.questionArr[0].question_content
  }

  getAnswers = () => {
    // console.log(this.state.questionObj)
    // return this.state.questionArr.map(question => <li onClick={this.handleClick}>{question.getAnswers}</li>)
    return this.state.questionArr.length !== 0 ?
    this.state.questionArr[this.state.whichQuestionCount].getAnswers.map((answer, index) => <li className='answer' onClick={() => this.handleClick(index + 1)}>{answer}</li>)
    :
    ""
  }

  render() {
    // console.log(this.state.questionArr.map(question => console.log(question.getAnswers)))
    // debugger
    let {whichQuestionCount, questionArr} = this.state
    // let result;
    // console.log("which q", whichQuestionCount);
    if(whichQuestionCount >= questionArr.length) {
      return <Result totalPoints={this.state.points} setUser={this.props.setUser}/>
    }
    return (
      <div>
        <h1 className='questions'>{this.getQuestions() ? this.getQuestions():  null}</h1>
        <ol>{this.getQuestions() ? this.getAnswers() : 'you failed'}</ol>

      </div>

    );
  }

}

export default Question;
