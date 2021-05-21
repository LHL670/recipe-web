import React from "react";
import'./done.css';

class TodoList extends React.Component {
	handleChange = event => {
	const updateTodo = {
		...this.props.todoItems,
		[event.currentTarget.name]: event.currentTarget.value
	};
	console.log(event.currentTarget.value);
	this.props.updateTodos(this.props.index, updateTodo);
	};

	toggleCheckbox = event => {
	const updateTodo = {
		...this.props.todoItems,
		[event.currentTarget.name]: event.currentTarget.checked
	};
	
	this.props.updateTodos(this.props.index, updateTodo);
	};

	render() {
	return (
		<li className={this.props.todoItems.isCompleted ? "done" : null}>
		<input
			type="checkbox"
			name="isCompleted"
			checked={this.props.todoItems.isCompleted}
			onChange={this.toggleCheckbox}
			// checked={this.props.todoItems.isChecked}
		/>
		<button
			className="del-btn"
			onClick={() => this.props.removeToDoItem(this.props.index)}
		>
			x
		</button>
		<input
			type="text"
			name="todo"
			value={this.props.todoItems.todo}
			onChange={this.handleChange}
		/>
		{/* <button>Edit</button> */}
		
		</li>
	);
	}
}


export default TodoList;
/*import React from "react";
import TodoListItem from "./TodoItem";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class TodoList extends React.Component {
    render() {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem
            key={index}
            item={item}
            index={index}
            removeItem={this.props.removeItem}
            TodoDone={this.props.TodoDone}
          />
        );
      });
      return <ul className="list-group"> {items} </ul>;
    }
  }*/