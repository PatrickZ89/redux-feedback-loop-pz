import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Route, Link} from 'react-router-dom';


class Confirmation extends Component {
 
  render() {
    return (
        <div>
          <h2>Thank You!</h2>
    
        <Link to="/feeling"><button>Leave New Feedback</button></Link>
      </div>
    );
  }
}
//connecting to redux
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Confirmation);