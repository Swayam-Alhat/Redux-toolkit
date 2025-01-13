import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isComplete: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((obj) => obj.id != action.payload);
    },
    updateTodo: (state, action) => {
      const { id, updatedText } = action.payload;
      state.todos = state.todos.map((obj) => {
        return obj.id == id ? { ...obj, text: updatedText } : obj;
      });
    },
    toggleCheck: (state, action) => {
      state.todos = state.todos.map((obj) =>
        obj.id == action.payload ? { ...obj, isComplete: !obj.isComplete } : obj
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleCheck } =
  todoSlice.actions;

export default todoSlice.reducer;
