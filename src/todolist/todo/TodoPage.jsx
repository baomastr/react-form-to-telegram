import React, { PureComponent } from 'react';
import TodoList from './TodoList';

class TodoPage extends PureComponent {
  render() {
    return (
      <div>
        <h1> Todo List </h1>
        <TodoList />
      </div>
    );
  }
}

export default TodoPage;
