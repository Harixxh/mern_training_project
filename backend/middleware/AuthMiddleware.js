const jwt=require('jsonwebtoken');

exports.protect=(req , res,next)=>{
    const token=req.headers.authorization
    if(!token || !token.startsWith('Bearer')){
        res.status(401).json({msg:"unauthorized token"})
    }

    try{
        const  tok=token.split(' ')[1];
       // res.send(token)
        const decoded=jwt.verify(tok,process.env.JWTSECRECTKEY)
        req.user=decoded
        console.log(decoded)
        return next()
    }
    catch(err){
           res.send('Invalid token')
    }
}
