import React from "react";
import AddItem from "./component/addItem";
import DeleteItem from "./component/deleteItem";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Khamis</h1>
        <AddItem />
        <DeleteItem />
      </div>
    );
  }
}

export default App;
