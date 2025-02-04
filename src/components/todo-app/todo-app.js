import React, { Component } from 'react';

import AppHeader from '../App';
import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';

import './todo-app.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      filter: 'all',
    };
  }

  deleteItem = (id) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.filter((item) => item.id !== id),
    }));
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      id: new Date().getTime(),
      completed: false,
      date: new Date(),
    };
    this.setState((prevState) => ({
      todoData: [...prevState.todoData, newItem],
    }));
  };

  onToggleDone = (id) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));
  };

  onUpdate = (id, newLabel) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.map((todo) => (todo.id === id ? { ...todo, label: newLabel } : todo)),
    }));
  };

  clearCompleted = () => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.filter((el) => !el.completed),
    }));
  };

  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  render() {
    const { todoData, filter } = this.state;
    const doneCount = todoData.filter((el) => !el.completed).length;

    const filteredTodos = todoData.filter((item) => {
      switch (filter) {
        case 'active':
          return !item.completed;
        case 'completed':
          return item.completed;
        default:
          return true;
      }
    });

    return (
      <div className="todoapp">
        <AppHeader />
        <NewTodo onItemAdded={this.addItem} />
        <TodoList
          todos={filteredTodos}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onUpdate={this.onUpdate}
        />
        <Footer
          doneCount={doneCount}
          filter={filter}
          onFilterChange={this.changeFilter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoApp;
