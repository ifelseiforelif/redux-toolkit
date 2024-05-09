import { useSelector, useDispatch } from "react-redux";
import { Todo, addTodo } from "../slices/todoSlice";
import TodoItem from "./TodoItem";
import store from "../store/store";

const TodoList = () => {
  const todos: Todo[] = useSelector((state: Todo) => state.todos);

  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add a Todo"
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            handleAddTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul>
        {todos?.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
