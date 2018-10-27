import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const FeedPhoto = (props, context) => {
  return (
    <div className={styles.feedPhoto}>
      <div className={styles.header}>
        <img
          src={props.creator.profile_img || require("images/noPhoto.jpg")}
          alt={props.creator.username}
          className={styles.image}
        />
        <div className={styles.headerColumn}>
          <span className={styles.creator}>{props.creator.username}</span>
          <span className={styles.location}>{props.location}</span>
        </div>
      </div>
      <img src={props.file} alt={props.caption} />
      <div className={styles.meta}>
        <PhotoActions
          number={props.like_count}
          isLiked={props.is_liked}
          photoId={props.id}
        />
        <PhotoComments
          caption={props.caption}
          comments={props.comments}
          creator={props.creator.username}
        />
        <TimeStamp time={props.natural_time} />
        <CommentBox />
      </div>
    </div>
  );
};

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired
};

export default FeedPhoto;
