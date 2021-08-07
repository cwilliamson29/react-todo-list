import React from "react";
import LeftBar from "./ui/leftBar";
import RightBar from "./ui/rightBar";
import todos from "./todosData";

function App() {
  return (
    <div className="mainBody">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default App;
