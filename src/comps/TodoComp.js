import React from "react";

class TodoComp extends React.Component {
  render() {
    const completedStyle = {
      color: "grey",
      fontStyle: "italic",
      textDecoration: "line-through",
    };
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todo.done}
          onChange={() => {
            this.props.m(this.props.todo.id);
          }}
        />
        <p style={this.props.todo.done ? completedStyle : null}>
          {this.props.todo.do}
        </p>
      </div>
    );
  }
}

export default TodoComp;
