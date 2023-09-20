import React from "react";
import "./App.css";
import ItemsCard from "./components/ItemsCard";
import CommentsCard from "./components/CommentsCard";

function App() {
  return (
    <div className="App">
      <ItemsCard />
      <CommentsCard />
    </div>
  );
}

export default App;
