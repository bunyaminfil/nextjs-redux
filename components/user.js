import React, { Component } from "react";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div> id : {user.id}</div>
        <div> name :{user.name}</div>
        <div> username :{user.username}</div>
        <div> email :{user.email}</div>
      </React.Fragment>
    );
  }
}

export default User;
