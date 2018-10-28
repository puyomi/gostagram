import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const UserRow = props => (
  <div className={styles.container}>
    <div className={styles.column}>
      <img
        className={props.big ? styles.bigAvatar : styles.avatar}
        src={props.user.profile_image || require("images/noPhoto.jpg")}
        alt={props.user.username}
      />

      <div className={styles.user}>
        <span className={styles.username}>{props.user.username}</span>
        <span className={styles.name}>{props.user.name}</span>
      </div>

      <span className={styles.column}>
        {props.user.following ? (
          <button className={styles.button2} onClick={props.handleClick}>
            팔로잉
          </button>
        ) : (
          <button className={styles.button} onClick={props.handleClick}>
            팔로우
          </button>
        )}
      </span>
    </div>
  </div>
);

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    following: PropTypes.bool.isRequired
  }).isRequired,
  big: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

UserRow.defaultProps = {
  big: false
};

export default UserRow;
