
import axios from 'axios';
export const getTasksRequest = () => axios.get("http://localhost:3000/tasks");

export const createTaskRequest = (task) => axios.post("http://localhost:3000/tasks",task);

export const deleteTaskRequest = (id) => axios.delete(`http://localhost:3000/tasks/${id}`);
export const getTaskRequest = (id) => axios.get(`http://localhost:3000/tasks/${id}`);
export const updateTaskRequest = (id,data) => axios.put(`http://localhost:3000/tasks/${id}`,data);