import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    return (
      <ul>
        list
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    );
  }
}

export default TodoList;
