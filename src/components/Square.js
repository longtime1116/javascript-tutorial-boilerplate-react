import React from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: this.state.value + 1 });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
