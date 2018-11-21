// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  ///Question for Jake: why is the this below undefined without binding??
  handleClick(event) {
    console.log(this)
    this.setState({hasBeenClicked: !this.state.hasBeenClicked})
  }


  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={(this.handleClick)}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
