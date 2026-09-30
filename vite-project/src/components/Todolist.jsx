import Todoitem from "./Todoitem";

const Todolist = ({ todos,deletetodo,toggletodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todoitem 
        key={index}
        todo={todo}
        index={index}
        deletetodo={deletetodo}
        toggletodo={toggletodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
