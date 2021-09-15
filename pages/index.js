import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userAction";
class index extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser=this.onUpdateUser.bind(this)
  }
  onUpdateUser() {
    this.props.dispatch(updateUser("isim değişti"));
  }
  render() {
    console.log("selam", this.props);
    return (
      <div>
        {this.props.user}
        index page <button onClick={this.onUpdateUser}>Change name</button>
      </div>
    );
  }
}
// all state
const mapStateToProps = (state) => {
  return state;
};
//just product state
// const mapStateToProps = (state) => ({
//   products: state.products,
// });

export default connect(mapStateToProps)(index);
