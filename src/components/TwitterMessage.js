import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      charsLeft: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      charsLeft: this.props.maxChars - this.state.message.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <p>Characters left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
