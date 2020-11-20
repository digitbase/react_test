import React, { Component, Fragment } from "react";
import "./style.css";
import Xiaojiejieinput from "./Xiaojiejieinput";
import axios from "axios";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            inputValue: "jspang",
            list: ["基础按摩", "精油摊背"],
        };
    }

    componentDidMount() {
        console.log("componentDidMount组件将要挂载到");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount组件将要挂载到");
    }

    test() {
        console.log("this click");
    }
    inputChange() {
        this.setState({
            inputValue: this.input.value,
        });
    }

    addServer(e) {
        if (this.state.inputValue.trim().length > 0) {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: "",
            });
        } else {
            console.log(this.state.inputValue.trim().length);
        }
        console.log("-------------");
        console.log(this.ul.querySelectorAll("li"));
        console.log("-------------");
    }

    deleteItem(index) {
        console.log(index);
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    }

    componentDidMount() {}

    render() {
        console.log("reder挂载");

        axios
            .post("http://www.baidu.com")
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        return (
            <Fragment>
                <label htmlFor="jspang">添加服务:</label>
                <input
                    className="test"
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    ref={(input) => {
                        this.input = input;
                    }}
                ></input>
                <button onClick={this.addServer.bind(this)}>增加服务</button>
                <ul ref={(ul) => (this.ul = ul)}>
                    {this.state.list.map((item, index) => {
                        return (
                            /*                             <li
                                onClick={this.delList.bind(this, index)}
                                key={index + item}
                                dangerouslySetInnerHTML={{ __html: item }}
                            ></li> */

                            <Xiaojiejieinput
                                //avname="test"
                                content={item}
                                key={index + item}
                                index={index}
                                list={this.state.list}
                                deleteItem={this.deleteItem}
                            />
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default Xiaojiejie;
