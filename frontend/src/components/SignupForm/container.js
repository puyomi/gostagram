import React, { Component } from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    email: "",
    username: "",
    name: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };
  render() {
    const { email, username, name, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        usernameValue={username}
        nameValue={name}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
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
    const {email, name, username, password} = this.state;
    const {createAccount} = this.props;
    createAccount(username, password, email, name)
    event.preventDefault();
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
