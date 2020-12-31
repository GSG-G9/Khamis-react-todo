import React from "react";
import AddItem from "./component/addItem";
import DeleteItem from "./component/deleteItem";
import "./App.css";

class App extends React.Component {
  state = {
    items: [
      { id: 1, task: "create react app by npx create-react-app" },
      { id: 2, task: "create a component folder and some initial files" },
      { id: 3, task: "create a static list and render her in table" },
    ],
  };

  addItems = (item) => {
    item.id = Math.random();
    const items = [...this.state.items];
    items.push(item);
    this.setState({ items });
  };

  deleteItems = (id) => {
    const items = [...this.state.items];
    const D = items.filter((item) => item.id !== id);
    this.setState({ items: D });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi Khamis</h1>
        <DeleteItem items={this.state.items} deleteItems={this.deleteItems} />
        <AddItem addItems={this.addItems} />
      </div>
    );
  }
}

export default App;
