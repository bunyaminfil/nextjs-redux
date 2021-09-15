import { List } from "antd";
import React from "react";
import Link from "next/link";
import { fetchUsers } from "../actions/userAction";

const data = [
  { id: "1", name: "selam" },
  { id: "2", name: "selam 2" },
];
// console.log(fetchUsers)
class Users extends React.Component {
  render() {
    const { fetchusers } = this.props;
console.log(fetchusers)
    return (
      <React.Fragment>
        <List
          data={data}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Link href={"/user/" + item.id}>{item.name}</Link>}
                description="sadasd"
              />
            </List.Item>
          )}
        />
      </React.Fragment>
    );
  }
}

export default Users;
