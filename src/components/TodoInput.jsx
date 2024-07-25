import React, { useState } from "react";

const TodoInput = ({ handleAddTodos, todoValue, setTodoValue }) => {
  const addTodoHandler = () => {
    handleAddTodos(todoValue);
    setTodoValue("");
  };

  const userInputHandler = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={userInputHandler}
        value={todoValue}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
    </header>
  );
};

export default TodoInput;
