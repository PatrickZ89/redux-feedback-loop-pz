import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling'

class App extends Component {
  state = {
    newFeedback: {
      feeling: 0,
      understanding: '',
      support: '',
      comments: '',
    },
  }


  handleChangeFor = (event) => {
    console.log('setting');
    
    this.setState({
      newFeedback: {
        feeling: event.target.value,
      }
    });
  }


  handleNext = (event) => {
    event.preventDefault();
    let action = {
      type: 'SET_FEELING', payload: this.state.newFeedback.feeling
    }
    this.props.dispatch(action);
  }
   
   
    // axios({
    //   method: 'POST',
    //   url: '/feedback',
    //   data: this.state.newFeedback

    // })
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Feeling />
        <div>
          <h2>Review Your Feedback</h2>
        </div>
        <p>Feeling: {this.props.feelingReducer}</p>
        <p>Understanding: {this.state.newFeedback.understanding}</p>
        <p>Support: {this.state.newFeedback.support}</p>
        <p>Comments: {this.state.newFeedback.comments}</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);
