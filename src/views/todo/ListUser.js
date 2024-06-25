import React from "react";

import "./main.css";
import AddForm from "./AddForm";
class ListUser extends React.Component {
  state = {
    ListUserTodos: [
      { id: "todo1", title: "Orange" },
      { id: "todo2", title: "Apple" },
      { id: "todo3", title: "Mango" },
    ],
    showContent: false,
    editTodo: {},
  };
  // ẩn hiện content
  ChangeStatus = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  };

  // thêm 1 todo vào danh sách
  addNewTodo = (todo) => {
    let currentListUserTodo = this.state.ListUserTodos;
    currentListUserTodo.push(todo);
    this.setState({
      showContent: true,
    });
  };

  handleEditTodo = (todo) => {
    let { editTodo, ListUserTodos } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let ListUserTodosCopy = [...ListUserTodos];

      let objIndex = ListUserTodosCopy.findIndex((item) => item.id === todo.id);

      ListUserTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        ListUserTodos: ListUserTodosCopy,
        editTodo: {},
      });
      alert("Update todo succeed!");
      return;
    }

    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editTodoCoppy = { ...this.state.editTodo };
    editTodoCoppy.title = event.target.value;
    this.setState({ editTodo: editTodoCoppy });
  };

  // xóa 1 todo
  deleteTodo = (todo) => {
    let ListUsercurrent = this.state.ListUserTodos.filter(
      (item) => item.id !== todo.id
    );
    // Gán lại kết quả của phương thức filter vào ListUsercurrent
    this.setState({
      ListUserTodos: ListUsercurrent,
    });
    alert("delete success");
  };

  render() {
    let { ListUserTodos, showContent, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(isEmptyObj);
    return (
      <>
        <p>Simple Todo Apps with BoBo</p>
        <div className="ListUser-todo-container">
          <AddForm addNewTodo={this.addNewTodo} />
          <div className="ListUser-todo-content">
            {showContent === false ? (
              <div>
                <button onClick={this.ChangeStatus} type="button">
                  Show
                </button>
              </div>
            ) : (
              <>
                {ListUserTodos &&
                  ListUserTodos.length > 0 &&
                  ListUserTodos.map((item, index) => {
                    return (
                      <div className="todo-child" key={item.id}>
                        {isEmptyObj === true ? (
                          <span>
                            {" "}
                            {index + 1}-{item.title} <></>
                          </span>
                        ) : (
                          <>
                            {editTodo.id === item.id ? (
                              <span>
                                {index + 1}-{" "}
                                <input
                                  onChange={(even) =>
                                    this.handleOnchangeEditTodo(even)
                                  }
                                  value={editTodo.title}
                                ></input>
                              </span>
                            ) : (
                              <span>
                                {" "}
                                {index + 1}-{item.title} &nbsp;
                              </span>
                            )}
                          </>
                        )}
                        <button onClick={() => this.handleEditTodo(item)}>
                          {isEmptyObj === false && editTodo.id === item.id
                            ? "Save"
                            : "Edit"}
                        </button>
                        <></>
                        <></>
                        <button onClick={() => this.deleteTodo(item)}>
                          Delete
                        </button>
                      </div>
                    );
                  })}
                <div>
                  <button onClick={this.ChangeStatus} type="button">
                    hide
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default ListUser;
