const Task = require('../models/Task');
const User=require('../models/User')
exports.taskcreate= async (req,res)=>{
    const {title,descrption,status,user}=req.body;
    const CreateTask=await Task.create({
title,
descrption,
status,
user:req.user.id
    })
    res.status(200).send('task created sucessfully')
}

exports.getuser=async (req,res)=>{
   
    const _id=req.body.user

    const users=await User.findOne({_id})

    res.status(200).send(users)
}
exports.gettask=async(req,res)=>{
     const user=req.user.id
     
     const ret= await Task.find({user})

       if(!ret){
        res.status(401).send('invalid user id')
       }
     res.status(201).send(ret)
}
exports.gettaskbyid=async(req,res)=>{
    const get =await Task.findOne({_id:req.params.id,user:req.user.id})
    if(!get){
       return res.send('empty')
    }
    
        res.json({get:{get}})
    
}
exports.singletask=async(req,res)=>{
     
     
     const ret= await Task.findOne({
        _id:req.params.id,
        user:req.user.id
     })
     //const re=await Task.findById({_id:ret._id})

       if(!ret){
        res.status(401).send('invalid user id')
       }
     res.status(201).send(ret)
}
exports.updatetask=async (req,res)=>{
      const {title}=req.body
      const ret= await Task.findByIdAndUpdate({ _id:req.params.id,user:req.user.id},req.body,  {
        new: true,         
        runValidators: true
      })
      if(!ret){
        res.status(500).send('invalid user id or task id')
      }
      res.status(201).send(ret)
        
}
exports.deletetask=async(req,res)=>{
    const ret=await Task.findByIdAndDelete({_id:req.params.id,user:req.user.id})
    if(!ret){
        res.status(501).send("task  is not there")
    }
    res.status(201).send("Task deleted successfully");
}