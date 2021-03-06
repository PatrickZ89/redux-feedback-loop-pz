import React, { Component } from 'react';
import { connect } from 'react-redux';



class Support extends Component {
    state = {
        newFeedback: {
            support: 0,
        },
    };


// setting local state before linking with redux
    handleChangeFor = (event) => {
        console.log('Setting to:', event.target.value);
        this.setState({
            newFeedback: {
                support: event.target.value,
            }
        });
    }

// storing in redux
    handleNext = (event) => {
        event.preventDefault();
        let action = {
            type: 'SET_SUPPORT', payload: this.state.newFeedback.support
        }
        this.props.dispatch(action);
    // redirecting
        this.props.history.push('/comments');
    }


    render() {
        return (
            <div>
                <h2>How well are you being supported? </h2>
                <br />
                <form onSubmit={this.handleNext}>
                    
                    <input
                        type="number"
                        placeholder="Support"
                        onChange={this.handleChangeFor}
                    />
                    <button type="submit">Next</button>
                </form>
                <div>
                    <h2>Review Your Feedback</h2>
                </div>
                <p>Feeling: {this.props.feelingReducer}</p>
                <p>Understanding: {this.props.understandingReducer}</p>
                <p>Support: {this.props.supportReducer}</p>
                <p>Comments: {this.props.commentsReducer}</p>
                <button className="disabled">INCOMPLETE</button>
            </div>
        );
    }
}
//connecting to redux
const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Support);