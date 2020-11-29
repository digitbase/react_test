import React, { Component } from "react";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "myTtest",
        };
    }

    changeText(e) {
        //console.log("changeText");
        console.log(e.target.value);
        this.state.name = e.target.value;
        this.setState({});
    }

    render() {
        return (
            <div>
                this is App
                <br />
                {this.state.name}
                <br />
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.changeText(e);
                    }}
                />
                <button>添加</button>
            </div>
        );
    }
}

export default App;
