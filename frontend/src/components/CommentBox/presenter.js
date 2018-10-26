import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";

const CommentBox = (props, context) => (
  <form className={styles.commentBox}>
    <Textarea className={styles.input} placeholder="댓글 달기..." />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;
