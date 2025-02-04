import React, { Component } from 'react';
import './new-todo.css';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  addTask = (e) => {
    if (e.key === 'Enter') {
      this.props.onItemAdded(this.state.value);
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
        onKeyDown={this.addTask}
      />
    );
  }
}

export default NewTodo;
