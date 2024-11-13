import React, { useState } from "react";
import "./StackUI.css";

const MAX = 5;

function StackUI() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const push = () => {
    if (stack.length >= MAX) {
      alert("Stack Overflow");
    } else {
      setStack([...stack, inputValue]);
      setInputValue("");
    }
  };

  const pop = () => {
    if (stack.length === 0) {
      alert("Stack Underflow");
    } else {
      setStack(stack.slice(0, -1));
    }
  };

  const peek = () => {
    return stack.length > 0 ? stack[stack.length - 1] : "Stack is empty";
  };

  const isEmpty = () => {
    return stack.length === 0 ? "Yes" : "No";
  };

  const isFull = () => {
    return stack.length === MAX ? "Yes" : "No";
  };

  return (
    <div className="stack-container">
      <h2>Stack Operations</h2>
      <div className="controls">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={push}>Push</button>
        <button onClick={pop}>Pop</button>
      </div>

      <div className="stack-display">
        {stack.map((item, index) => (
          <div key={index} className="stack-item">
            {item}
          </div>
        ))}
      </div>

      <div className="info">
        <p>Top: {peek()}</p>
        <p>Stack Size: {stack.length}</p>
        <p>Is Empty: {isEmpty()}</p>
        <p>Is Full: {isFull()}</p>
      </div>
    </div>
  );
}

export default StackUI;
