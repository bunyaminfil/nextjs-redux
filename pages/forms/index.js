import React, { Component } from "react";
import Controlled from "../../components/Controlled";
import UnControlled from "../../components/UnControlled";

class Forms extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Controlled />
        <UnControlled />
      </div>
    );
  }
}

export default Forms;
