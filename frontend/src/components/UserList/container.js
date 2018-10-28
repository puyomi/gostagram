import React, { Component } from "react";
import UserList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  componentWillReceiveProps = nextprops => {
    if (nextprops.userList) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    return <UserList {...this.state} {...this.props} />;
  }

  // componentDidMount() {
  //   const { getFeed } = this.props;
  //   if (!this.props.feed) {
  //     getFeed();
  //   } else {
  //     this.setState({
  //       loading: false
  //     });
  //   }
  // }


}

export default Container;
