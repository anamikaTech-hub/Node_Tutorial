//apply to specific router, only for a group of related routes, such as admin routes.

const express = require('express')
const app = express();

const router = express.Router();

router.use((req,res,next)=>{
    console.log('Middleware for admin routes');
    next();
});

router.get('/dashboard',(req,res)=>{
    res.send('Admin dashboard')
});

app.use('/admin',router);
// Here, /admin/dashboard will trigger the router middleware ,but other routes wont.

app.listen(3000,()=>{
    console.log('Server running...');
    
})