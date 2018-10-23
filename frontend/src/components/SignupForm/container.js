import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email: "",
    username: "",
    nickname: "",
    password: ""
  };
  render() {
    const { email, username, nickname, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        usernameValue={username}
        nicknameValue={nickname}
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
    event.preventDefault();
    console.log(this.state);
  };
  _handleFacebookLogin = response => {
    console.log(response);
  };
}

export default Container;
