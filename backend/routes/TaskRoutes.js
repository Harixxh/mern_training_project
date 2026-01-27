const express=require('express')
const router=express.Router();
const {taskcreate,getuser, gettask, singletask,updatetask, deletetask, gettaskbyid}=require('../controllers/TaskController')
const {protect}=require('../middleware/AuthMiddleware')
router.post('/newtasks',protect,taskcreate)
router.get('/getuser/:id',getuser)
router.get('/gettask',protect,gettask)
router.get('/singletask/:id',protect,singletask)
router.patch('/updatetask/:id',protect,updatetask)
router.delete('/deletetask/:id',protect,deletetask)
router.get('/gettaskbyid/:id',protect,gettaskbyid)
module.exports=router