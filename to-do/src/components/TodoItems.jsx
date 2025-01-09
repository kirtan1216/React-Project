import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoitems, onDeleteClick }) {
  return (
    <div className="container text-center">
      {todoitems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItems;
