import React from "react";
import AddItem from "./component/addItem";
import DeleteItem from "./component/deleteItem";
import "./App.css";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "ahmed", age: 21 },
      { id: 2, name: "mahmoud", age: 22 },
      { id: 3, name: "khamis", age: 23 },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <h1>Hi Khamis</h1>
        <AddItem />
        <DeleteItem />
        <table className="content-table">
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {items.map((i) => (
            <tr key={i.id} className="card">
              <td>{i.name}</td>
              <td>{i.age}</td>
            </tr>
          ))}
        </table>
        <form>
          <input type="text" placeholder="Enter name...." id="name" />
          <input type="number" placeholder="Enter age...." id="age" />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
