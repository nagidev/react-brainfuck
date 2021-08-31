import React, { useState } from "react";

// components
import Header from "./components/Header";
import Code from "./components/Code";
import Output from "./components/Output";
import Interpreter from "./components/Interpreter";

import './App.css';

function App() {
  const [codeData, setCodeData] = useState( initCode("", "") );
  
  function initCode(code, input) {
    const newData = {};
    const stack = [];

    stack.length = 64;
    stack.fill(0);

    newData.code = code;
    newData.stack = stack;
    newData.pointer = 0;
    newData.input = input;
    newData.output = "";

    return newData;
  }

  const run = () => {
    setCodeData(Interpreter(codeData));
  };

  const reset = () => {
    setCodeData(initCode("", ""));
  };

  return (
    <div className="App">
      <Header />
      <div className="container-fluid w-75">
        <div className="row">
          <Code codeData={codeData} setCodeData={setCodeData} run={run} reset={reset} />
          <Output codeData={codeData} setCodeData={setCodeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
