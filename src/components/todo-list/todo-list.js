import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

class TodoList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone, onUpdate } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <TodoListItem
          key={id}
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onUpdate={onUpdate}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

export default TodoList;
