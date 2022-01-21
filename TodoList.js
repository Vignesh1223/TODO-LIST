import React from 'react';
import React from './style.css';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: [],
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    const data = e.target;
    const newTodo = {
      taskTitle: data.taskTitle.value,
      date: data.date.value,
      time: data.time.value,
    };

    this.state.todoList.push(newTodo);
    this.setState({ todoList: this.state.todoList });
  };

  deleteTodo = (e) => {
    this.state.todoList.splice(e.target.value);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  editTodo = (e) => {
    this.state.todoList.splice(e.target.edit);
    this.setState({
      todoList: this.state.todoList,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <label>To-Do List:</label>
          <input type="text" name="taskTitle" />
          <br />
          <label>Date:</label>
          <input type="date" name="date" />
          <br />
          <label>Time:</label>
          <input type="time" name="time" />
          <br />
          <br />
          <button type="">ADD</button>
        </form>
        <ul>
          {this.state.todoList.map((task, index) => {
            return (
              <li key={index}>
                {task.date} {task.time}
                <br />
                <br />
                {task.taskTitle}
                <button type="button" onClick={this.deleteTodo} value={index}>
                  Delete
                </button>
                <button type="button" onClick={this.editTodo} edit={index}>
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
