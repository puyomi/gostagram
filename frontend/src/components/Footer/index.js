import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>{context.t("INSTAGRAM정보")}</li>
          <li className={styles.listItem}>{context.t("지원")}</li>
          <li className={styles.listItem}>{context.t("홍보센터")}</li>
          <li className={styles.listItem}>{context.t("API")}</li>
          <li className={styles.listItem}>{context.t("채용정보")}</li>
          <li className={styles.listItem}>{context.t("개인정보처리방침")}</li>
          <li className={styles.listItem}>{context.t("약관")}</li>
          <li className={styles.listItem}>{context.t("프로필")}</li>
          <li className={styles.listItem}>{context.t("해쉬태그")}</li>
          <li className={styles.listItem}>{context.t("언어")}</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>© 2018 gostagram</span>
    </div>
  </footer>
);

Footer.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;
