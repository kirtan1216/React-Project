import React from "react";
import { MdAddTask } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button "
          className="btn btn-outline-danger kg-button"
          onClick={() => onDeleteClick(todoName)}
        >
          <MdAddTask />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
