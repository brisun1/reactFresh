import React, { Component } from "react";
import ReactDOM from "react-dom";
//import ReactDom from "react-dom";
export default class Counter extends Component {
    render() {
        return <h1>hellokkkkkkkkkkkk</h1>;
    }
}
//const counter = new Counter();
if (document.getElementById("hello")) {
    ReactDOM.render(<Counter />, document.getElementById("hello"));
}
