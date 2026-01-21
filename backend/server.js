const express =require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

const app=express();
dotenv.config();
mongoose.connect(process.env.dbpassword).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Failed to connect to MongoDB',err);
});
app.use(express.json()); 
app.use('/auth',require('./routes/AuthRoutes'))
app.use('/task',require('./routes/TaskRoutes'))

app.get('/api',(req,res)=>{
    res.send('Hello from the backend harish  server!');
});
app.get('/home',(res,req)=>{
    req.send('this is my home page');
});
app.post('/about',(req,res)=>{
    const data=req.body;
    res.send(data);

});

app.listen(30000,()=>{
    console.log('Server is running on port 30000');
});