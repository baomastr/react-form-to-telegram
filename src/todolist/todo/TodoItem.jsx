import React, { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    return (
      <li>
        item
        <input type="text"/>
      </li>
    );
  }
}

export default TodoItem;
