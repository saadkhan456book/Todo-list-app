function Todoitem({todo, index, deletetodo,toggletodo}) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-xl border border-purple-100 bg-purple-50 p-4 
    shadow-sm transition hover:scale-[1.02] hover:shadow-md">
      
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
           checked={todo.completed}
           onChange={()=>toggletodo(index)}
          className="h-5 w-5 cursor-pointer accent-purple-600"
        />

        <span className={ todo.completed
        ? "linethrough text-gray-400"
        : "text-lg font-medium text-gray-700"}>
          {todo.text}
        </span>
      </div>

      <button onClick={()=>
      deletetodo(index)}
       className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600">
        Delete
      </button>

    </div>
  );
}

export default Todoitem;