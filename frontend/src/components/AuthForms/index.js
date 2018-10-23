import React from "react";
import styles from "./styles.module.scss";
import Ionicon from "react-ionicons";

export const LoginForm = props => (
  <div className={styles.formComponent}>
    <img src={require("images/logo.png")} alt="logo" />
    <form className={styles.form}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="이메일을 입력하세요."
      />
      <input
        className={styles.textInput}
        type="password"
        placeholder="비밀번호"
      />
      <input className={styles.button} type="submit" value="로그인" />
    </form>
    <span className={styles.divider}>또는</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      Facebook으로 로그인
    </span>
    <span className={styles.forgotLink}>비밀번호를 잊으셨나요?</span>
  </div>
);

export const SignupForm = props => (
  <div className={styles.formComponent}>
    <img src={require("images/logo.png")} alt="logo" />
    <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      Facebook으로 로그인
    </button>
    <span className={styles.divider}>또는</span>
    <form className={styles.form}>
      <input
        className={styles.textInput}
        type="email"
        placeholder="이메일 주소"
      />
      <input className={styles.textInput} type="text" placeholder="성명" />
      <input
        className={styles.textInput}
        type="username"
        placeholder="사용자 이름"
      />
      <input
        className={styles.textInput}
        type="password"
        placeholder="비밀번호"
      />
      <input className={styles.button} type="submit" value="가입" />
    </form>
    <p>가입하면 Instagram의 약관, 데이터정책 및 쿠키정책에 동의하게 됩니다.</p>
  </div>
);
