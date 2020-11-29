import React, { Component, Fragment } from "react";
import "./style.css";
import MyInput from "./Input";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            editId: -1,

            list: [
                { id: 1, content: "吃饭", isCompleted: true },
                { id: 3, content: "睡觉", isCompleted: false },
                { id: 2, content: "和水", isCompleted: true },
            ],
        };

        this.changeCheckBox = this.changeCheckBox.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.inputNewItem = this.inputNewItem.bind(this);
        this.delClick = this.delClick.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.btnClick2 = this.btnClick2.bind(this);
        this.endEdit = this.endEdit.bind(this);
    }

    btnClick() {
        this.addTodo();
    }
    btnClick2(todo, textInput) {
        this.setState(
            {
                editId: todo.id,
            },
            () => {
                textInput.current.focus();
            }
        );
    }

    //输入一行
    inputNewItem(e) {
        this.setState({
            newItem: e.target.value,
        });
    }
    submitClick(e) {
        e.preventDefault();
        this.addTodo();
        return false;
    }

    //删除一行
    delClick(delItem) {
        let { list } = this.state;

        let index = list.findIndex((i) => i.id === delItem.id);
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    }

    //勾选一项
    changeCheckBox(e, item) {
        item.isCompleted = e.target.checked;
        this.setState({});
    }

    endEdit(todo) {
        this.setState({
            editId: -1,
        });
    }

    //修改项目名
    changeInput(e, todo) {
        todo.content = e.target.value;
        this.setState({});
    }

    addTodo() {
        if (this.state.newItem.trim() == "") return false;
        let maxIndex = 0;
        this.state.list.forEach((todo) => {
            if (todo.id > maxIndex) {
                maxIndex = todo.id;
            }
        });
        maxIndex++;
        this.state.list.push({
            id: maxIndex,
            content: this.state.newItem,
            isCompleted: false,
        });
        this.setState({
            newItem: "",
        });
    }

    listItemRender() {
        return this.state.list.map((todo) => {
            return (
                <MyInput
                    editId={this.state.editId}
                    todo={todo}
                    delClick={this.delClick}
                    changeCheckBox={this.changeCheckBox}
                    btnClick2={this.btnClick2}
                    changeInput={this.changeInput}
                    endEdit={this.endEdit}
                />
            );
            // return (
            //     <li
            //         key={todo.id}
            //         className={this.state.editId === todo.id ? "editing" : ""}
            //     >
            //         <div className="view">
            //             <input
            //                 className="toggle"
            //                 type="checkbox"
            //                 checked={todo.isCompleted}
            //                 onChange={(e) => {
            //                     this.changeCheckBox(e, todo);
            //                 }}
            //             />
            //             <label onDoubleClick={(e) => this.btnClick2(todo)}>
            //                 {todo.content}
            //             </label>

            //             <button
            //                 className="destroy"
            //                 onClick={(e) => {
            //                     this.delClick(todo);
            //                 }}
            //             ></button>
            //         </div>
            //         <input
            //             ref={this.setTextInputRef}
            //             className="edit"
            //             value={todo.content}
            //             onChange={(e) => {
            //                 this.changeInput(e, todo);
            //             }}
            //             onBlur={(e) => {
            //                 this.endEdit(todo);
            //             }}
            //         />
            //     </li>
            // );
        });
    }

    render() {
        let { newItem } = this.state;
        return (
            <Fragment>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <form onSubmit={(e) => this.submitClick(e)}>
                            <input
                                className="new-todo"
                                placeholder="What needs to be done?"
                                autoFocus
                                onChange={this.inputNewItem}
                                value={newItem}
                            />
                        </form>
                    </header>

                    <section className="main">
                        <input
                            id="toggle-all"
                            className="toggle-all"
                            type="checkbox"
                            autoFocus={true}
                        />
                        <label htmlFor="toggle-all">Mark all as complete</label>
                        <ul className="todo-list">{this.listItemRender()}</ul>
                    </section>
                </section>
            </Fragment>
        );
    }
}

export default App;
