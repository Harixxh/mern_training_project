const mongoose=require('mongoose');
const TaskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    status: {
    type: String,
    enum: ['active', 'inactive', 'blocked'],
    default: 'active'
  },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Users'
   }
})

module.exports=mongoose.model('Tasks',TaskSchema);