import React, { Component } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editValue: props.label,
    };
  }

  editorClick = () => {
    this.setState({ editing: true });
  };

  handleEditChange = (e) => {
    this.setState({ editValue: e.target.value });
  };

  handleEditSubmit = (e) => {
    if (e.key === 'Enter') {
      this.props.onUpdate(this.props.id, this.state.editValue);
      this.setState({ editing: false });
    }
  };

  render() {
    const { date, completed, onDeleted, onToggleDone } = this.props;
    const { editing, editValue } = this.state;

    const classNames = ['todo-list-item'];
    if (completed) classNames.push('completed');
    if (editing) classNames.push('editing');

    const timeOfCreate = formatDistanceToNowStrict(date, {
      includeSeconds: true,
    });

    return (
      <li className={classNames.join(' ')}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={onToggleDone} />
          <label>
            <span className="description">{editValue}</span>
            <span className="created">created {timeOfCreate} ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.editorClick} />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>

        {editing && (
          <input
            type="text"
            className="edit"
            value={editValue}
            onChange={this.handleEditChange}
            onKeyDown={this.handleEditSubmit}
            onBlur={() => this.setState({ editing: false })}
          />
        )}
      </li>
    );
  }
}

export default TodoListItem;
