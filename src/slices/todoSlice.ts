import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Math.random(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodoCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
  },
});

export const { addTodo, toggleTodoCompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
