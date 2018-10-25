import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import Loading from "components/Loading";

const Feed = (props, context) => {
  if (props.loading) {
    return <LoadingFeed />;
  } else {
    return <div>Feed</div>;
  }
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

Feed.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Feed;
