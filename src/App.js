import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <StyledComponent />
      {/* <CSSModule /> */}
      {/* <SassComponent /> */}
      {/* <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />} */}
      {/* <Counter /> */}
      {/* <Info /> */}
      {/* <Average /> */}
    </div>
  );
};

export default App;
