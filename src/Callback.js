import React, { Component } from "react";

export class Callback extends Component {
  componentDidMount() {
    ////
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("invalid callback url");
    }
  }
  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
