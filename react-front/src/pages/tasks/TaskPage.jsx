import { useEffect } from "react"
import TaskCard from "../../components/TaskCard.jsx";
import { useTasks } from "../../context/TaskContext.jsx";

export default function TaskPage() {

  const { tasks, loadTasks } = useTasks();


  useEffect(() => {
    loadTasks();
  },[]);

  function renderTasks(){
    if(tasks.length === 0)
      return <h2>No tasks found</h2>;

    return tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      ));
    
  }

  return (
    <div className="mt-10 p-10">
      <h1 className="text-white text-3xl mb-4">Tasks ({tasks.length})</h1>

      <div className="grid grid-cols-4">
      {renderTasks()}
      </div>
    </div>
  )
}
