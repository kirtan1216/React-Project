import React from "react";
import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

function AddDetails({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNmaeChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <>
      <div className="row kg-row">
        <div className="col-6">
          <input
            className="details-main"
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNmaeChange}
          />
        </div>
        <div className=" details-main  col-4 ">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button "
            className="btn btn-outline-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddToPhotos />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddDetails;
