import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {HashRouter as Route, Link} from 'react-router-dom';
import axios from 'axios';


class Review extends Component {
 
// sending redux values to the server
    handleSubmitClick = (event) => {
        console.log('Submitting!');
        event.preventDefault();
       
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: this.props.feelingReducer,
                understanding: this.props.understandingReducer,
                support: this.props.supportReducer,
                comments: this.props.commentsReducer
            }
          })
    // redirecting
        this.props.history.push('/confirmation');
      }

  render() {
    return (
        <div>
          <h2>Review Your Feedback</h2>
        
        <p>Feeling: {this.props.feelingReducer}</p>
        <p>Understanding: {this.props.understandingReducer}</p>
        <p>Support: {this.props.supportReducer}</p>
        <p>Comments: {this.props.commentsReducer}</p>
        <button onClick={this.handleSubmitClick}>Submit</button>
      </div>
    );
  }
}
//connecting to redux
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Review);