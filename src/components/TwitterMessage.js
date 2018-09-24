import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      charactersLeft: 140
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <p>Characters left: {this.state.charactersLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
