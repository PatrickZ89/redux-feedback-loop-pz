import React, { Component } from 'react';
import { connect } from 'react-redux';



class Understanding extends Component {
    state = {
        newFeedback: {
            understanding: 0,
        },
    };


// setting local state before linking with redux
    handleChangeFor = (event) => {
        console.log('Setting to:', event.target.value);
        this.setState({
            newFeedback: {
                understanding: event.target.value,
            }
        });
    }

// storing in redux
    handleNext = (event) => {
        event.preventDefault();
        let action = {
            type: 'SET_UNDERSTANDING', payload: this.state.newFeedback.understanding
        }
        this.props.dispatch(action);
    // redirecting
        this.props.history.push('/support');
    }


    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <br />
                <form onSubmit={this.handleNext}>
                   
                    <input
                        type="number"
                        placeholder="Understanding"
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

export default connect(mapReduxStateToProps)(Understanding);