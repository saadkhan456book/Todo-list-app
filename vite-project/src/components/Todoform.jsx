import { useState } from "react";
function Todoform({ addtodo })  {
const [Task, setTask]= useState("");

const handleAdd = () =>{
  if(Task ===""){
    console.error("input cannot be empty")
    return
  }
  addtodo(Task);
  setTask("");
};
  return (
    <div className="mb-6 flex gap-3">
      
      <input
        type="text"
        value={Task}
        onChange={(e)=>
        setTask(e.target.value)}
        placeholder="What do you need to do?"
        className="flex-1 rounded-xl border-2 border-purple-200 bg-purple-50 px-5 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
      />

      <button  onClick={handleAdd}
        className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-purple-700 hover:scale-105">
        Add Task
      </button>

    </div>
  );
}

export default Todoform;