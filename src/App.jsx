import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {

  return (
    <div>
      <h1 className="text-red-500 text-3xl">Gerenciador de Tarefas</h1>
      < AddTask />
      <Task />
    </div>
  );
}

export default App;
