import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
    constructor(pro) {
        super(pro);
        this.state = {
            inputValue: "jspang",
            list: [],
        };
    }

    test() {
        console.log("this click");
    }
    inputChange(e) {
        console.log(this);
        console.log(this.state.value);
        console.log(e.target.value);

        this.setState({
            inputValue: e.target.value,
        });
    }

    render() {
        return (
            <Fragment>
                <input
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                ></input>
                <button>增加服务</button>
                <ul>
                    <li>美容2</li>
                    <li>asda</li>
                </ul>
            </Fragment>
        );
    }
}

export default Xiaojiejie;
