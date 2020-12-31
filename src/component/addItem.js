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
  addItems: PropTypes.func,

};
export default AddItem;
