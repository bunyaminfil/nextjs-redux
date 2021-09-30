import React from "react";
import Link from "next/link";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link href="/users">Users</Link> <Link href="/forms">Forms</Link>
      </div>
    );
  }
}
export default Navbar;
