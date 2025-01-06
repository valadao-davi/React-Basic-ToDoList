import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar React e Java",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar 2 horas por dia de inglês",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Arrumar a casa",
      description: "Lavar a louça, arrumar o quarto, varrer o chão",
      isCompleted: false,
    },
  ]);

  function OnTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Task tasks={tasks} OnTaskClick={OnTaskClick}/>
      </div>
    </div>
  );
}

export default App;
