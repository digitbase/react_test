import React, { Component } from "react";

class MyInput extends Component {
    componentDidMount() {}
    constructor(props) {
        super(props);

        this.state = {
            todo: this.props.todo,
        };

        this.textInput = React.createRef();
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    changeCheckBox(e, todo) {
        this.props.changeCheckBox(e, todo);
    }
    changeInput(e, todo) {
        this.props.changeInput(e, todo);
    }

    btnClick2(todo) {
        this.props.btnClick2(todo, this.textInput);
    }

    endEdit(todo) {
        this.props.endEdit(todo);
    }

    delClick(todo) {
        console.log(this.props);
        this.props.delClick(todo);
    }
    render() {
        let { todo } = this.state;
        return (
            <li
                key={todo.id}
                className={this.props.editId === todo.id ? "editing" : ""}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={(e) => {
                            this.changeCheckBox(e, todo);
                        }}
                    />
                    <label onDoubleClick={(e) => this.btnClick2(todo)}>
                        {todo.content}
                    </label>

                    <button
                        className="destroy"
                        onClick={(e) => {
                            this.delClick(todo);
                        }}
                    ></button>
                </div>
                <input
                    className="edit"
                    value={todo.content}
                    onChange={(e) => {
                        this.changeInput(e, todo);
                    }}
                    onBlur={(e) => {
                        this.endEdit(todo);
                    }}
                    ref={this.textInput}
                />
            </li>
        );
    }
}

export default MyInput;
