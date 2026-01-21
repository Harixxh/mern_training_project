const express=require('express')
const router=express.Router();
const {taskcreate,getuser}=require('../controllers/TaskController')
router.post('/tasks',taskcreate)
router.post('/getuser',getuser)
module.exports=router