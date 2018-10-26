import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const TimeStamp = props => <span className={styles.time}>{props.time}</span>;

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired
};

export default TimeStamp;
