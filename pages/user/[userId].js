import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../../components/user";
import { getUser } from "../../actions/userAction";

class UserPage extends Component {
  componentDidMount() {
    this.props.getUser(1);
  }
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <User user={user} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.userReducer;
  return {
    user,
  };
};

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
