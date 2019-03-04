import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        newFeedback: {
            comments: '',
        },
    };

// setting local state before linking with redux
    handleChangeFor = (event) => {
        console.log('Setting to:', event.target.value);
        this.setState({
            newFeedback: {
                comments: event.target.value,
            }
        });
    }
// storing in redux
    handleNext = (event) => {
        event.preventDefault();
        let action = {
            type: 'SET_COMMENTS', payload: this.state.newFeedback.comments
        }
        this.props.dispatch(action);
    // redirecting
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave? </h2>
                <br />
                <form onSubmit={this.handleNext}>
                   
                    <input
                        type="text"
                        placeholder="Comments"
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

export default connect(mapReduxStateToProps)(Comments);