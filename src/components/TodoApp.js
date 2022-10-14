import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddToDo from "./AddTodo";
import Footer from "../store/containers/Footer";
import axios from "axios";
import { v4 as uuid } from "uuid";

function TodoApp() {
  const [state, setState] = useState({
    todos: [],
  });
  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const handleDeleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setState({
          todos: [
            ...state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        });
      });
  };

  const handleAddTodo = (title) => {
    const todoData = {
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todoData)
      .then((res) => {
        console.log(res.data);
        setState({
          todos: [...state.todos, res.data],
        });
      });
  };

  useEffect(() => {
    const config = {
      params: {
        _limit: 10,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((res) => {
        setState({
          todos: res.data,
        });
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <AddToDo handleAdd={handleAddTodo} />
      <Todos
        todos={state.todos}
        handleChange={handleCheckboxChange}
        handleDelete={handleDeleteTodo}
      />
      <Footer />
    </div>
  );
}

export default TodoApp;
