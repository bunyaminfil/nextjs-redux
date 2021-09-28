import { List } from "antd";
import React from "react";
import Link from "next/link";
class UserComponent extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Link href={"/user/" + item.id}>{item.name}</Link>}
                description={item.email}
              />
            </List.Item>
          )}
        />
      </React.Fragment>
    );
  }
}

export default UserComponent;
