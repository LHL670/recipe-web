import logo from './logo.svg';
import './App.css';
import Todo from './ToDoListAPP';
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";

function TodoApp() {
  
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: false,
      todo: todoInput,
    });

    setTodoInput("");
  }
  
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div class="todo-title">
          <h1>To Do List</h1>
        </div>

        <form>
          <div class="list-input">
            <TextField
              id="standard-basic"
              label="Write a Todo"
              value={todoInput}
              style={{ width: "90vw", maxWidth: "500px" }}
              onChange={(e) => setTodoInput(e.target.value)}
            />
          
          
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
          </div>
        </form>

        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <TodoListItem
              inprogress={todo.inprogress}  
              todo={todo.todo}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
