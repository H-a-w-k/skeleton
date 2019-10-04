import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="main">
      <p>Hello my world from App</p>
      <input
        value={text}
        onChange={event => setText(event.target.value)}
      ></input>
    </div>
  );
};

export default App;
