import "../styles/globals.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import React from "react";
import { Provider, connect } from "react-redux";
import { combineReducers, createStore } from "redux";
import Navbar from "../components/navbar";
import userReducer from '../reducers/userReducer';
import productReducer from '../reducers/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});
class MyApp extends React.Component {
  render() {
    const { Component, pageProps, router } = this.props;
    const store = createStore(rootReducer, {
      products: [
        {
          name: "Samsung",
          type: "TV",
        },
      ],
      user: "Benjamin",
    });
    console.log(store.getState());

    const updateUserAction = {
      type: "userUpdate",
      payload: {
        user: "Bünyamin",
      },
    };

    store.dispatch(updateUserAction);
    console.log(store.getState());

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
