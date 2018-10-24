import React, { Component } from "react";
import LoginForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        usernameValue={username}
        passwordValue={password}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }
  _handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
    // redux action will be here
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
