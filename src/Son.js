import React, { Component } from "react";
import PropTypes from "prop-types";

class Son extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {};
    }

    static propTypes = {
        // age: PropTypes.string.isRequired,
        // text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        text: "abc",
    };

    render() {
        let { age, name, text } = this.props;
        console.log("son", this.props.children);

        return (
            <div>
                this is son
                {this.props.header}
                <div>{age}</div>
                <hr />
                <div>{text}</div>
                <hr />
                <div>{name}</div>
                <div>{this.props.children}</div>
                {this.props.end}
            </div>
        );
    }
}

export default Son;
