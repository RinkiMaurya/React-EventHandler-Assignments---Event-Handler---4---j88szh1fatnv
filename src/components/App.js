import React from "react";
import "../styles/App.css";
const App = () => {
  const handleDoubleClick = (event) => {
    event.preventDefault();
    console.log("I was double clicked ");
  };
  const handleSingleClick = (event) => {
    event.preventDefault();
    console.log("I was not double clicked ");
  };

  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
