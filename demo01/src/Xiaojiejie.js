import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
    constructor(pro) {
        super(pro);
        this.state = {
            inputValue: "jspang",
            list: [],
        };
    }

    render() {
        return (
            <Fragment>
                <input
                    value={this.state.inputValue}
                    onChange={this.test}
                ></input>
                <button>增加服务</button>
                <ul>
                    <li>美容1</li>
                    <li>asda</li>
                </ul>
            </Fragment>
        );
    }

    test() {
        console.log("this click");
    }
    inputChange(e) {
        console.log(e.target.value);
    }
}

export default Xiaojiejie;
