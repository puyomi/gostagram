import React, { Component } from "react";
import Feed from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { getFeed } = this.props;
    if (!this.props.feed) {
      getFeed();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops.feed) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }

  static propTypes = {
    getFeed: PropTypes.func.isRequired,
  };
}

export default Container;
