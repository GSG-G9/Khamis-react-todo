import React from "react";
import AddItem from "./component/addItem";
import DeleteItem from "./component/deleteItem";
import EditItem from "./component/editItem";
import "./App.css";

class App extends React.Component {
  state = {
    items: [
      { id: 1, task: "create react app by npx create-react-app" },
      { id: 2, task: "create a component folder and some initial files" },
      { id: 3, task: "create a static list and render her in table" },
    ],
    item: false,
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

  findItems = (id) => {
    this.setState({ item: true, itemId: id });
  };

  editTask = (text) => {
    const items = [...this.state.items];
    const F = items.map((element) => {
      if (element.id === this.state.itemId) {
        element.task = text;
        return element;
      }
      return element;
    });
    this.setState({ items: F, item: false });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi Khamis</h1>
        <DeleteItem
          items={this.state.items}
          deleteItems={this.deleteItems}
          findItems={this.findItems}
        />
        <AddItem addItems={this.addItems} />
        {this.state.item && <EditItem editTask={this.editTask} />}
      </div>
    );
  }
}

export default App;
