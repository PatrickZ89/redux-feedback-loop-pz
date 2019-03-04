import React, { Component } from 'react';
import { connect } from 'react-redux';



class Feeling extends Component {
    state = {
        newFeedback: {
            feeling: 0,
        },
    };


    handleChangeFor = (event) => {
        console.log('Setting to:', event.target.value);
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
        this.props.history.push('/understanding');
    }


    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <br />
                <form onSubmit={this.handleNext}>
                   
                    <input
                        type="number"
                        placeholder="Feeling"
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

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Feeling);