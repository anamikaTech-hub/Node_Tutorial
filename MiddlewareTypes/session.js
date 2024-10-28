const authenticateUser = (req,res,next)=>{
    if(req.session && req.session.user){
        next();
    }else{
        res.status(401).json({message: 'Access denied.Please login'})
    }
}
module.exports = authenticateUser