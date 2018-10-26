import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const PhotoActions = (props, context) => (
  <div className={styles.actions}>
    <div className={styles.icons}>
      <span className={styles.icon}><Ionicon icon="ios-heart-outline" fontSize="28px" color="black"/></span>
      <span className={styles.icon}><Ionicon icon="ios-text-outline" fontSize="28px" color="black"/></span>
    </div>
    <span className={styles.likes}>좋아요 {props.number} 개</span>
  </div>
);

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired
};

export default PhotoActions;
