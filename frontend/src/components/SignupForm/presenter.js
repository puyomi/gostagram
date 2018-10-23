import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.module.scss";
import FacebookLogin from "react-facebook-login";

const SignupForm = props => (
  <div className={formStyles.formComponent}>
    <img src={require("images/logo.png")} alt="logo" />
    <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
    <FacebookLogin
      appId="1918678421559797"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon="fa-facebook-official"
      textButton="Facebook으로 로그인"
    />
    <span className={formStyles.divider}>또는</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="email"
        placeholder="이메일 주소"
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        className={formStyles.textInput}
        type="text"
        placeholder="성명"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        className={formStyles.textInput}
        type="username"
        placeholder="사용자 이름"
        value={props.nicknameValue}
        onChange={props.handleInputChange}
        name="nickname"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder="비밀번호"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input className={formStyles.button} type="submit" value="가입" />
    </form>
    <p>가입하면 Instagram의 약관, 데이터정책 및 쿠키정책에 동의하게 됩니다.</p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  nicknameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
