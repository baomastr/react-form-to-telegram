import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('TodoItem was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
        list
        <TodoItem todo={this.state.value} />
      </ul>
    );
  }
}

export default TodoList;
