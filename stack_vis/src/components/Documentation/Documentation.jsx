import React from "react";
import "./Documentation.css";
import StackOverview from "./components/StackOverview";
// import SudokuExample from "./components/WorkingOfStack";
import CodeExamples from "./components/CodeExamples";
import RealLifeUsage from "./components/RealLifeUsage";
import WorkingOfStack from "./components/WorkingOfStack";
import Example from "./components/Example";
// import StackUI from "../Visualization/StackUI";
// import StackOverview from "./components/StackOverview";

function Documentation() {
  return (
    <div className="doc">
      <h1>Stack Data Structure Documentation</h1>
      <StackOverview />
      {/* <StackUI/> */}
      {/* <SudokuExample /> */}

      <CodeExamples />
      <WorkingOfStack />
      <Example/>
      <RealLifeUsage />
    </div>
  );
}

export default Documentation;
