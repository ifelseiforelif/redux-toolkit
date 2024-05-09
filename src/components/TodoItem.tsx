import React from "react";
import { useDispatch } from "react-redux";
import { Todo, removeTodo, toggleTodoCompleted } from "../slices/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTodoCompleted(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      <span>{todo.text}</span>
      <button onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;
