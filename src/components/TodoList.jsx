import { TodoCard } from "./TodoCard";

const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          todoIndex={todoIndex}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        >
          {todo}
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
