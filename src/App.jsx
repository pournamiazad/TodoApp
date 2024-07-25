import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistTodo(newTodoList);
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter(
      (todo, todoIndex) => todoIndex !== todoId
    );
    persistTodo(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  const persistTodo = (newList) => {
    localStorage.setItem("todosList", JSON.stringify({ todos: newList }));
  };

  useEffect(() => {
    if (!localStorage) {
      return;
      {
        todos: newList;
      }
    }

    const locallyStoredTodo = localStorage.getItem("todosList");
    if (!locallyStoredTodo) {
      return;
    }
    const savedList = JSON.parse(locallyStoredTodo).todos;
    setTodos(savedList);
  }, []);

  return (
    <>
      <TodoInput
        todos={todos}
        handleAddTodos={handleAddTodos}
        setTodoValue={setTodoValue}
        todoValue={todoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
};

export default App;
