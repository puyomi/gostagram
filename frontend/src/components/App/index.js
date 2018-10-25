import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user, router } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: router.location.pathname
  };
};

export default connect(mapStateToProps)(Container);