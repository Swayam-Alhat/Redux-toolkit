import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleCheck,
  updateTodo,
} from "../features/todo/todoSlice";

function TodoBox({ obj }) {
  const { id, text, isComplete } = obj;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  // useState for updaing the value

  const [updatedText, setUpdatedText] = useState(text);

  // handle editing
  function handleEditBtn() {
    setIsEditing((prev) => !prev);
  }

  // handles toggling of complete or incomplete
  function handleIsComplete() {
    dispatch(toggleCheck(id));
  }

  // delete todo
  function handleRemoveTodo() {
    dispatch(removeTodo(id));
  }

  useEffect(() => {
    dispatch(updateTodo({ id, updatedText }));
  }, [updatedText]);

  return (
    <>
      <div className="grid grid-cols-[10%_70%_10%_10%]  mt-2 mx-1 px-2 py-1 gap-1 ">
        <button
          onClick={handleIsComplete}
          className="bg-black active:bg-slate-950"
        >
          {isComplete ? "✔️" : "⏳"}
        </button>
        <input
          value={updatedText}
          autoFocus
          onChange={(e) => setUpdatedText(e.target.value)}
          disabled={!isEditing}
          type="text"
          className="outline-none bg-black  font-bold px-2 py-1"
        />
        <button onClick={handleEditBtn} className="bg-black active:bg-gray-950">
          {isEditing ? "📂" : "✏️"}
        </button>
        <button
          onClick={handleRemoveTodo}
          className="bg-red-600 px-2 py-1 active:bg-red-700"
        >
          X
        </button>
      </div>
    </>
  );
}

export default TodoBox;
