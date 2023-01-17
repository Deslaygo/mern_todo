import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <div className="bg-slate-600 flex justify-between px-8 h-20 items-center">
      <h2 className="text-white text-2xl">TODO APP</h2>

      <ul className="flex">
        <li className="decoration-sky-500">
          <Link to="/" className="text-md mr-24 text-white hover:bg-zinc-800 p-1 rounded">Home</Link>
          
        </li>
        <li>
        <Link to="/new" className="text-md mr-24 text-white hover:bg-zinc-800 p-1 rounded">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}