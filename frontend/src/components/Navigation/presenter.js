import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Navigation = (props, context) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <Link to="/">
            <img
              src={require("images/logo.png")}
              className={styles.logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className={styles.column}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색"
          />
        </div>
        <div className={styles.column}>
          <div className={styles.navIcon}>
            <Link to="/explore">
              <Ionicon
                icon="ios-compass-outline"
                fontSize="28px"
                color="black"
              />
            </Link>
          </div>
          <div className={styles.navIcon}>
            <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
          </div>
          <div className={styles.navIcon}>
            <Link to="/profile">
              <Ionicon
                icon="ios-person-outline"
                fontSize="28px"
                color="black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
