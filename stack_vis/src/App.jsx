import React, { useState } from "react";
import "./App.css";
import Documentation from "./components/Documentation/Documentation";
import Visualization from "./components/Visualization/Visualization";

function App() {
  const [view, setView] = useState(null);

  return (
    <>
      <div className="container">
        {!view ? (
          <div className="main" style={{ height: "100vh" }}>
            <h1 className="title">Welcome to the Stack Visualizer</h1>
            <p className="description">
              Choose an option to explore stack operations or view the
              documentation.
            </p>
            <div className="buttons">
              <div className="button-container">
                <button
                  type="button"
                  className="animated-button"
                  onClick={() => setView("visualization")}
                >
                  📊 Visualization
                </button>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  className="animated-button"
                  onClick={() => setView("documentation")}
                >
                  📄 Documentation
                </button>
              </div>
            </div>
          </div> 
        ) : view === "documentation" ? (
          <Documentation />
        ) : (
          <Visualization style={{ height: "100vh" }} />
        )}
     </div>
    </>
  );
}

export default App;
