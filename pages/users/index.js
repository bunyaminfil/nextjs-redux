import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "../../components/users";
import { getUsers } from "../../actions/userAction";

class UsersPage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return <Users users={users} />;
  }
}

const mapStateToProps = (state) => {
  const { users } = state.userReducer;
  return {
    users,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
