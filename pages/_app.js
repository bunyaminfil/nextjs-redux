import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import Navbar from "../components/navbar";
class MyApp extends React.Component {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <React.Fragment>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
