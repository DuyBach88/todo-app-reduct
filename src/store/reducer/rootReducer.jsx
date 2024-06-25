import React from "react";
// state trạng thái của redux , nơi lưu trữ data redux

// initstate để lưu trữ dữ liệu
const initStte = {
  todo: [
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Study" },
  ],
  post: [],
};
const rootReducer = (state = initStte, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      // code block
      console.log("run into delete todo: ", action);
      let todo = state.todo;
      todo = todo.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        todo,
      };
    case "ADDNEW_TODO":
      let newTodo = {
        id: Math.floor(Math.random() * 1000) + 1,
        title: action.payload.title,
      };
      let todoList = [...state.todo, newTodo];
      return {
        ...state,
        todo: todoList,
      };

      break;
    // code block
    default:
      return state;
  }
};

export default rootReducer;
