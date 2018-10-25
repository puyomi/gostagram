import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const CommentBox = (props, context) => (
    <form>
        <textarea placeholder="댓글 달기..."/>
    </form>
)

export default CommentBox;
