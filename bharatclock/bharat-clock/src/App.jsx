import { useState } from "react";
import "./App.css";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import ClockSlogan from "./components/ClockSlogan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
