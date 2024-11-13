// components/RealLifeUsage.js
import React from "react";

const RealLifeUsage = () => (
  <section>
    <h2>Real-Life Uses of Stacks</h2>
    <ul>
      <li><b>Function Call Management:</b> Stacks are used to manage function calls. Each function call is pushed to a stack, and once completed, it is popped.</li>
      <li><b>Browser history:</b> Each page you visit is pushed to a stack, and the back button pops the last visited page from the stack.</li>
      <li><b>Expression evaluation:</b>  Stacks are used to evaluate postfix and prefix expressions.</li>
      <li><b>Undo Mechanism in Text Editors:</b>  Most text editors use a stack to track changes for undo operations.</li>
    </ul>
  </section>
);

export default RealLifeUsage;

