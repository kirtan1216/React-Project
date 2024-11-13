// components/SudokuExample.js
import React from "react";

const WorkingOfStack = () => (
  <section>
    <h2>Working of a Stack</h2>
    <ul>
      <p>
        <b>Initialization:</b> The stack is initialized with a top variable set
        to -1 to indicate an empty stack.
      </p>
      <p>
        <b>Push Operation:</b> When a new element is pushed, top increments, and
        the element is placed at the top position.
      </p>
      <p>
        <b>Pop Operation:</b> When an element is popped, the element at top is
        removed, and top decrements.
      </p>
      <p>
        <b>Peek Operation:</b> The element at top is accessed without any
        modification to the stack.
      </p>
      <p>
        <b>isEmpty and isFull:</b> These checks are used to determine the status
        of the stack, ensuring operations are performed only when valid.
      </p>
    </ul>
  </section>
);

export default WorkingOfStack;
