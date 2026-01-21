const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
exports.register=async(req,res)=>{
    const {name,email,password,age}=req.body
    const existing =await User.findOne({email})
    if(existing){
        res.status(400).json({message:"User already exisiting"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const user=await User.create({
        name,email,password:hashedpassword,age
    })
    res.status(201).send('user registered sucessfully')
}
 exports.login=async(req,res)=>{
    const {email,password}=req.body;
    const existing=await User.findOne({email})
    if(!existing){
        res.status(400).send('email is mistake or not registered')
    }
   const isMatch=await bcrypt.compare(password,existing.password)
   const pass=existing.password
    const hashedpassword=await bcrypt.hash(password,10)

   if(!isMatch){
      
      res.status(400).send('wrong  email and password')
   }
   
    const token=jwt.sign(
        {id:existing._id},
        process.env.JWTSECRECTKEY,
        {expiresIn:"1d"}
    )
      res.send({token:{token}})
     /* res.status(200).send(hashedpassword+ ' ' +pass+ ' Login successfully')*/

  
}