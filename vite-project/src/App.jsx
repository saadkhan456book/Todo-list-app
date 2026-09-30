import { useState } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (newtask) => {
    setTodos([
      ...todos,
      {
        text: newtask,
        completed: false,
      },
    ]);
  };

  const deletetodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));

  }
    const toggletodo = (index) => {
      setTodos(
        todos.map((todo, i) => {
          if (i === index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      );
    };
  
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-blue-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-purple-700 ">
          My Tasks
        </h1>

        <ul className="mb-6 flex justify-center gap-6 font-semibold text-gray-600">
          <li>Plan</li>
          <li>Focus</li>
          <li>Finish</li>
        </ul>

        <Todoform addtodo={addtodo} />

        <Todolist todos={todos}
         deletetodo={deletetodo}
         toggletodo={toggletodo} />
      </div>
    </div>
  );
}

export default App;
