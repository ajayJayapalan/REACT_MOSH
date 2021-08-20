import React, { Component } from "react";

class Like extends Component {
  getClass = () => {
    let classes = "fa fa-heart";
    classes += !this.props.liked ? "-o" : "";
    return classes;
  };

  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onPress}
        className={this.getClass()}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
