import React from "react";
import TodoBox from "./components/TodoBox";
import TodoInput from "./components/TodoInput";
import { useSelector } from "react-redux";
function App() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <div className=" h-screen text-white bg-black text-center flex flex-col justify-center items-center">
        <div className="text-3xl font-bold text-white my-2">Todo App</div>
        <div className="bg-slate-950 p-3 rounded-md">
          <TodoInput />
          {todos.map((obj) => (
            <div key={obj.id} className="w-full">
              <TodoBox obj={obj} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
