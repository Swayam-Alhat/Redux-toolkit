import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoInput() {
  // useRef to get value from input field
  const inputRef = useRef(null);

  // useDispatch to call function
  const dispatch = useDispatch();

  // fetching todos from store
  const todos = useSelector((state) => state.todo.todos);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  function handleAddBtn(e) {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value));

    inputRef.current.value = "";
  }
  return (
    <>
      <div className="px-2 py-1 flex flex-wrap">
        <form
          action="#"
          onSubmit={handleAddBtn}
          className="w-full flex justify-between items-center gap-2"
        >
          <input
            type="text"
            ref={inputRef}
            required
            className="px-2 py-1 bg-slate-800 outline-none text-slate-300 w-[540px] font-semibold "
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-md px-2 py-1 active:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoInput;
