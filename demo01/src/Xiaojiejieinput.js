import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieInput extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        console.log(this.props.list);
    }

    /*  shouldComponentUpdate(nextProps, nextState) {
        //return nextProps.content !== this.state.content;
        return false;
    } */

    render() {
        return (
            <li onClick={this.handleClick}>
                {this.props.avname}
                {this.props.content}
            </li>
        );
    }

    handleClick() {
        console.log(this.props.index);
        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieInput.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
};

XiaojiejieInput.defaultProps = {
    avname: "松森",
};

export default XiaojiejieInput;
