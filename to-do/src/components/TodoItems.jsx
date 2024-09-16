import React from "react";
import TodoItem from "./TodoItem";

function TodoItems(props) {
  return (
    <div className="container text-center">
      {props.todoitems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={props.onDeleteClick}></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
