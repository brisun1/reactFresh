import React from "react";
import ReactDOM from "react-dom";

function Example() {
    return (
        <div>
            {/* import React is used here implicitly. it transform dom <div></div>
<h1></h1> and so on  into virtual dom with ******React.createElement. */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Example333 Component
                            </div>

                            <div className="card-body">
                                I'm an example 3333component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hw">
                <h1>hello,world</h1>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
const sgl = <h3>single line variable</h3>;
ReactDOM.render(sgl, document.getElementById("one"));
