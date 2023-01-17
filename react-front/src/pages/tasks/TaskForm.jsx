import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../../context/TaskContext';

export default function TaskForm(){

  const {createTask, getTask, updateTask} = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const [task, setTask] = useState({
    title:'',
    description:'',
  })

  useEffect(()=>{
    

    const loadTask = async() => {
      if(params.id){
        const res = await getTask(params.id);
        setTask({title:res.title,description: res.description});
      }
    }

    loadTask();
  },[]);

  return (
    <div className=' flex h-screen justify-center items-center'>
      

      <div>
      <div className='bg-white w-80 h-72 p-4 rounded'>
        <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async(values,actions)=> {
          if(params.id){
            await updateTask(params.id,values);
            navigate('/');
          }else{
            await createTask(values);
          }
          actions.resetForm();
        }}
        >
        {({handleChange, handleSubmit, values, isSubmitting})=> (
          <Form onSubmit={handleSubmit}>
          <h1 className='text-slate-800 text-2xl font-bold'>{params.id ? 'EDIT TASK' : 'CREATE TASK'}</h1>
          <label className='text-gray-800'>Title:</label>
          <input className='border-black border-2 mb-4' type="text" name="title" 
          onChange={handleChange} value={values.title}/>

          <label className='text-gray-800 mt-4'>Description:</label>
          <textarea className='border-black border-2 w-60' name='description' rows={3} placeholder="Type description"
          onChange={handleChange} value={values.description}></textarea>

          <div className='flex justify-end mb-4 mt-4'>
            <button className='rounded bg-green-600 text-white text-md w-28 h-10 hover:bg-green-700' type='submit' disabled={isSubmitting}>
              { isSubmitting ? 'Saving ...' :  'Save'}
            </button>
          </div>

        </Form>
        )}
        </Formik>
      </div>

      </div>
    </div>
  );
}