import React from "react";
import PropTypes from "prop-types";

class DeleteItem extends React.Component {
  render() {
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
                <button onClick={() => this.props.deleteItems(i.id)}>Delete</button>
                <button onClick={() => this.props.findItems(i.id)}>Edit</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

DeleteItem.propTypes = {
  items: PropTypes.array,
  deleteItems: PropTypes.func,
  findItems:PropTypes.func,
 
};

export default DeleteItem;
