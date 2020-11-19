import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{false ? "js sadfa" : "test1 "}</li>

                <li>I love React</li>
            </ul>
        );
    }
}

export default App;
