const Task = require('../models/Task');
const User=require('../models/User')
exports.taskcreate= async (req,res)=>{
    const {title,descrption,status,user}=req.body;
    const CreateTask=await Task.create({
title,
descrption,
status,
user
    })
    res.status(200).send('task created sucessfully')
}

exports.getuser=async (req,res)=>{
   
    const _id=req.body.user

    const users=await User.findOne({_id})

    res.status(200).send(users)
}