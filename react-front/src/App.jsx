import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {TaskContextProvider} from "./context/TaskContext"
import NotFound from "./pages/common/NotFound"
import TaskForm from "./pages/tasks/TaskForm"
import TaskPage from "./pages/tasks/TaskPage"



function App() {

  return (
      <div className="bg-slate-800 h-screen">
        <TaskContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<TaskPage/>}/>
          <Route path="/new" element={<TaskForm/>}/>
          <Route path="/edit/:id" element={<TaskForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </TaskContextProvider>
      </div>
  )
}

export default App
