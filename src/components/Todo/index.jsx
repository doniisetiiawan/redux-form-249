import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import TodoForm from './TodoForm';
import './Todo.css';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  addTask = (values) => {
    const { task } = values;

    this.setState({
      items: [
        ...this.state.items,
        {
          id: uuidv4(),
          task,
          complete: false,
        },
      ],
    });
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <TodoForm addTask={this.addTask} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default index;
