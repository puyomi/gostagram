import React, { Component } from "react";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: ""
  };
  render() {
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._handleInputChange}
        value={this.state.term}
      />
    );
  }
  _handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      term: value
    });
  };

  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
}

export default Container;
