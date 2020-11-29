import React, { Component, Fragment } from "react";
import Son from "./Son";

export class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 2,
        };
    }

    btnClick() {
        this.setState({
            num: "",
        });
    }
    changeValue(e) {
        console.log(e.target);
        console.log(this);
        this.setState({
            num: e.target.value,
        });
    }
    render() {
        let dom = 1;
        let dom2 = 2;
        return (
            <Fragment>
                <div>
                    {this.state.num}
                    <br />
                    <input
                        type="text"
                        onChange={this.changeValue.bind(this)}
                        value={this.state.num}
                    />
                    <button onClick={this.btnClick.bind(this)}>点我</button>
                </div>
                <Son
                    age={this.state.num}
                    name="test"
                    header={<div>头部</div>}
                    end={<div>底部</div>}
                >
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </Son>
                <Son>{dom}</Son>
                <Son>{dom2}</Son>
            </Fragment>
        );
    }
}

export default App2;
