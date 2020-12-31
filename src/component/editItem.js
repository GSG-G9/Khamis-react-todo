import React from "react";
import PropTypes from "prop-types";

class EditItem extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTask(e.target.task.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Edit...."
            id="task"
          />
          <input type="submit" value="Edit" />
        </form>
      </div>
    );
  }
}

EditItem.propTypes = {
    editTask: PropTypes.func,
  
  };
export default EditItem;
