import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when app loads, listen to database and fetch newly added todos
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteHandler = (index) => {
    console.log(index);
    // todos.splice(index, 1);
    const localTodos = [...todos];
    localTodos.splice(index, 1);
    setTodos(localTodos);
  };
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form>
        <FormControl>
          <InputLabel>Add An Item</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          onClick={addTodo}
          color="primary"
        >
          Add To Do
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo text={todo} deleteHandler={deleteHandler} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
