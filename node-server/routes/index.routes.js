import { Router } from 'express';
import { pool } from '../store/db.js';

const router = Router();

router.get('/ping',async (req,res) =>{
  const [rows] = await pool.execute("Select 1 + 1 AS result");
  console.log(rows);
  res.json(rows);
});

export default router;