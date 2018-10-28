import React from "react";
import styles from "./styles.module.scss";
import Ionicon from "react-ionicons";
import Loading from "components/Loading";
import PropTypes from "prop-types";
import UserRow from "components/UserRow"


const UserList = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span onClick={props.closeLikes}>
          <Ionicon icon="md-close" fontSize="20px" color="black" />
        </span>
      </div>
      <div className={styles.content}>
        {props.loading ? <Loading /> : <RenderUsers list={props.userList} />}
      </div>
    </div>
  </div>
);

const RenderUsers = props => {
  props.list.map(user => <UserRow user={user} key={user.id} />);
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  closeLikes: PropTypes.func.isRequired
};

export default UserList;
