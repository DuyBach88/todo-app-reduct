import React, { Component } from "react";

export default class AddForm extends Component {
  state = {
    title: "", // Thêm trạng thái title để lưu tiêu đề của todo mới,
  };

  handleOnChangeTitle = (event) => {
    /*
     bad code
     this.state.title = event.target.value
    */

    this.setState({
      title: event.target.value,
    });
  };

  // submit
  handleSubmit = (event) => {
    if (!this.state.title) {
      alert("Missing title 's todos");
      return;
    }
    event.preventDefault();
    this.props.addNewTodo({
      id: Math.floor(Math.random() * 1000) + 1,
      title: this.state.title,
    });
    this.setState({ title: "" });
    alert("wow");
  };

  render() {
    return (
      <div className="add-todo">
        <input
          onChange={(event) => this.handleOnChangeTitle(event)}
          type="text"
          value={this.state.title}
        ></input>
        &nbsp;
        <button onClick={(event) => this.handleSubmit(event)} type="button">
          Add
        </button>
      </div>
    );
  }
}
