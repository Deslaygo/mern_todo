import { pool } from '../store/db.js'

export const getTasks = async (req,res)  => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY created_at ASC");
    res.json(result);
  } catch (error) {
    res.status(400).json({message:error.message});
  }
}


export const getTask =async (req,res)  => {
  try {
    let id = req.params.id;

    const [result] = await pool.query(`SELECT * FROM tasks WHERE id='${id}'`);

    if(result.length === 0){
      return res.status(404).json({message:"Task not found"});
    }

    res.json(result[0]);
  } catch (error) {
    res.status(400).json({message:error.message});
  }
}

export const createTask = async (req,res)  => {
  try {
    const {title, description} = req.body;
    const [result] = await pool.query("INSERT INTO tasks(title,description) VALUES (?,?)",[title,description]);

    res.json({
      id:result.insertId,
      title,
      description,
    });
  } catch (error) {
    res.status(400).json({message:error.message});
  }
  
}

export const updateTask = async (req,res)  => {
  try {
    let id = req.params.id;
  const [result] = await pool.query(`UPDATE tasks SET ? WHERE id=?`,[req.body,id]);

  let affectedRows = result.affectedRows;

  if(affectedRows === 0)
    return res.status(404).json({message:"Task not found"});

  res.send({
    status:200,
    message:"Task has been updated",
  });
  } catch (error) {
    res.status(400).json({message:error.message});
  }
}

export const deleteTask = async (req,res)  => {

  try {
    let id = req.params.id
    const [result] = await pool.query(`DELETE FROM tasks WHERE id=?`,[id]);

    let affectedRows = result.affectedRows;

    if(affectedRows === 0)
      return res.status(404).json({message:"Task not found"});

    res.send({
      status:200,
      message:"Task has been deleted",
    });
  } catch (error) {
    res.status(400).json({message:error.message});
  }

  
}


