import React from "react";
import TodoComp from "./comps/TodoComp";
import todos from "./model/todos";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tds: todos,
    };
  }

  handleChange = (id) => {
    console.log(id);
    this.setState((prevState) => {
      const updatedTds = prevState.tds.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
          console.log(todo.done);
        }
        return todo;
      });
      return {
        tds: updatedTds,
      };
    });
  };

  render() {
    const mappedTodos = this.state.tds.map((todo) => {
      return <TodoComp key={todo.id} todo={todo} m={this.handleChange} />;
    });
    return <div>{mappedTodos}</div>;
  }
}

export default App;
