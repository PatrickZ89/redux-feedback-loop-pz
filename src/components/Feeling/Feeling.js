import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


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
    }


    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <br />
                <form onSubmit={this.handleNext}>
                    <label>
                        Feeling?
                    </label>
                    <input
                        type="number"
                        placeholder="Feeling"
                        onChange={this.handleChangeFor}
                    />
                    <button type="submit">Next</button>
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Feeling);