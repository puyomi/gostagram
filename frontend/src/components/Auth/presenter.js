import React from "react";
import styles from "./styles.module.scss";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img
        className={styles.phoneImg}
        src={require("images/phone.png")}
        alt="app_main_img"
      />
    </div>
    <div className={styles.column}>
      <div className={styles.whiteBox}>
        {(() => {
          switch (props.action) {
            case "login":
              return (
                <p>
                  계정이 없으신가요?{" "}
                  <span
                    onClick={props.changeAction}
                    className={styles.changeLink}
                  >
                    가입하기
                  </span>
                </p>
              );
            case "signup":
              return (
                <p>
                  계정이 있으신가요?{" "}
                  <span
                    onClick={props.changeAction}
                    className={styles.changeLink}
                  >
                    로그인
                  </span>
                </p>
              );
            default:
              return null;
          }
        })()}
      </div>
      <div className={styles.appBox}>
        <span>앱을 다운로드 하세요.</span>
        <div className={styles.appStores}>
          <img src={require("images/ios.png")} alt="app_ios" />
          <img src={require("images/android.png")} alt="app_and" />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
