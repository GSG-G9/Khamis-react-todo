import React from "react";
import PropTypes from "prop-types";

class AddItem extends React.Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") {
      return false;
    } else {
      this.props.addItems(this.state);
      this.setState({
        task: "",
      });
    }
  };

  render() {
    const { task } = this.state;
    return (
      <div>
        <table className="content-table">
          <tbody>
            <tr>
              <th>All Tasks</th>
            </tr>
            {this.props.items.map((i) => (
              <tr key={i.id} className="card">
                <td>{i.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter task...."
            id="task"
            value={task}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

AddItem.propTypes = {
  items: PropTypes.array,
  addItems: PropTypes.func,
};
export default AddItem;
