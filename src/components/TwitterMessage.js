import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      maxChars: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: --this.state.maxChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          />
        {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
