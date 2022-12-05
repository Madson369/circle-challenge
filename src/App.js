import { useState } from "react";
import "./App.css";
import { Circle } from "./components/Circle.jsx";

function App() {
  const [circles, setCircles] = useState([]);
  const [copyCircles, setCopyCircles] = useState([]);

  const handleClick = (xCoordinate, yCoordinate) => {
    let newCircle = (
      <Circle
        key={circles.length + 1}
        className="Circle"
        initialX={xCoordinate}
        initialY={yCoordinate}
      />
    );

    setCircles([...circles, newCircle]);
    setCopyCircles([...circles, newCircle]);
  };

  const handleUndo = () => {
    if (circles.length > 0) {
      let copyArray = [...circles];
      copyArray.pop();
      setCircles(copyArray);
    }
  };

  const handleRedo = () => {
    if (copyCircles[circles.length]) {
      let copyArray = [...circles, copyCircles[circles.length]];
      setCircles(copyArray);
    }
  };

  return (
    <div
      className="App"
      style={{ zIndex: 1 }}
      onClick={(e) => {
        handleClick(e.clientX, e.clientY);
      }}
    >
      <div
        style={{
          display: "flex",
          zIndex: 999,
          width: "90px",
          height: "20px",
          padding: "20px",
          marginLeft: "20px",
        }}
        className="ButtonContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            handleUndo();
          }}
          className="button"
          style={{ marginRight: "10px" }}
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            handleRedo();
          }}
          className="button"
        >
          {">"}
        </button>
      </div>
      {circles}
    </div>
  );
}

export default App;
