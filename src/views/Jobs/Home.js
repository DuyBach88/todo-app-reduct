import React from "react";
import { connect } from "react-redux";
import "./Home.css";
// import chil from "../../assets/chil.jpg";
class Home extends React.Component {
  state = {
    newTodo: "",
  };

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };
  handleDelete = (todo) => {
    console.log("check user delete: ", todo);
    this.props.deleteTodoRedux(todo);
  };

  handleCreateNewToDo = () => {
    if (!this.state.newTodo) {
      alert("please input again ❗❗❗ ");
      return;
    }
    const newTodo = {
      title: this.state.newTodo,
    };
    this.props.addNewTodoRedux(newTodo);
    this.setState({ newTodo: "" });
  };
  render() {
    console.log("check data", this.props);
    let listToDo = this.props.dataRedux;
    return (
      <>
        <div className="header">Simple App with Todo List ✍ </div>
        {/* <img src={chil} alt="Logo" className="logo" /> */}
        <div className="container">
          <div className="add-todo">
            <input
              type="text"
              value={this.state.newTodo}
              onChange={this.handleChange}
              placeholder="Add new todo"
            />
            <button onClick={this.handleCreateNewToDo}>Add</button>
          </div>

          <div>
            {listToDo &&
              listToDo.length > 0 &&
              listToDo.map((item, index) => {
                return (
                  <div key={item.id}>
                    {index + 1} - {item.title}
                    &nbsp;&nbsp;
                    <span
                      onClick={() => {
                        this.handleDelete(item);
                      }}
                      className="delete"
                    >
                      ❌
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.todo };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodoRedux: (todoId) =>
      dispatch({ type: "DELETE_TODO", payload: todoId }),
    addNewTodoRedux: (todo) => dispatch({ type: "ADDNEW_TODO", payload: todo }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
