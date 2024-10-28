
const express = require('express');
const app = express();


app.use((req,res,next)=>{
    console.log('Request recieved at: ',new Date());
    next();
});

app.get('/about',(req,res)=>{
    res.send('About page');
});

app.listen(3000,()=>{
    console.log('Server is running...');
    
})
