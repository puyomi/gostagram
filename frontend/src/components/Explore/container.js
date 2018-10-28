import React, { Component } from "react";
import Explore from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { getExplore } = this.props;
    if (!this.props.userList) {
      getExplore();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops.userList) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { userList } = this.props;
    return <Explore {...this.state} userList={userList} />;
  }

  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    userList: PropTypes.array
  };
}

export default Container;
