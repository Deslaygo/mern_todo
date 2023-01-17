import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

export default function TaskCard({task}){

  const {deleteTask} = useTasks();
  const navigate = useNavigate();

  

  return (
    <div className=" rounded overflow-hidden shadow-md shadow-gray-600 bg-white mr-10 p-4 mt-6">
      <h2 className="text-xl">{task.title}</h2>
      <p className="text-sm text-gray-600">{task.description}</p>
      
      <div className="flex justify-end">
        <button className="bg-red-500 text-white rounded p-1 ml-4" onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="bg-blue-500 text-white rounded p-1 ml-4" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      </div>
      
    </div>
  );

}