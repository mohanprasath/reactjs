import React, { useState } from "react";
import "./App.css";

function App() {

  /*
  Aim:
    set a count variable to be updated every 1000 milliseconds
    display the counted variable in the web page

  This react project is a simple example of all the following:
  1. components
  2. hooks
  3. states
  4. rendering to index.js
  5. time out js function call
  */

  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return <div>{count}</div>;
}

export default App;
