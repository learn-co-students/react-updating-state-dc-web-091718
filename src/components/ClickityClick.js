import React, { Component } from 'react';

export default class ClickityClick extends Component {
    constructor () {
        super();
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    }

    render () {
        return (
            <div>
            <p>I have been {this.state.hasBeenClicked ? null : "not"} clicked!</p>
            <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}