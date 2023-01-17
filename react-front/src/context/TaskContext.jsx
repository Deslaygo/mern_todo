import { createContext, useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, updateTaskRequest } from "../api/task.api";

export const TaskContext = createContext();


export const useTasks = () => {
  const context = useContext(TaskContext);

  if(!context){
    throw new Error('useTasks must be used in a contextProvider');
  }
  return context;
}


export const  TaskContextProvider = ({children}) => {

  const [tasks, setTasks] =  useState([]);

  const createTask = async (values) => {
    try{
      const response = await createTaskRequest(values);

    }catch(error){
      console.log(error);
    }
  }


  const loadTasks = async  () => {
    try{
      const response = await getTasksRequest();
      setTasks(response.data);

    }catch(error){
      console.log(error);
    }
    
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      loadTasks();
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const updateTask = async (id,data) => {
    try {
      const response = await updateTaskRequest(id,data);
      console.log(response);
      loadTasks();
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      console.log(response);
      return response.data; 
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (<TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}>
    {children}
  </TaskContext.Provider>);
}