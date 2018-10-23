import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.module.scss";
import FacebookLogin from "react-facebook-login";

const LoginForm = props => (
  <div className={formStyles.formComponent}>
    <img src={require("images/logo.png")} alt="logo" />
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="text"
        placeholder="이메일을 입력하세요."
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder="비밀번호"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input className={formStyles.button} type="submit" value="로그인" />
    </form>
    <span className={formStyles.divider}>또는</span>
    <FacebookLogin
      appId="1918678421559797"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.facebookLink}
      icon="fa-facebook-official"
      textButton="Facebook으로 로그인"
    />
    <span className={formStyles.forgotLink}>비밀번호를 잊으셨나요?</span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
