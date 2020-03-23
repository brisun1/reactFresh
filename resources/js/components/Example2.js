import React, { Component } from "react";
import ReactDOM from "react-dom";
//import { Component } from "../../../public/js/app";

class Example2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Example 2222Component
                            </div>

                            <div className="card-body">
                                I'm an example 222component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Example2;

if (document.getElementById("example2")) {
    ReactDOM.render(<Example2 />, document.getElementById("example2"));
}
