const express = require('express');
const app = express();

////----------SIMPLE API---------------------////

app.get('/api/users',(req,res)=>{
    const users = [
        {id:1,name:'Alice'},
        {id:2,name:'Bob'}
    ]
    res.json(users);// Respond with  JSON data
});

////--------PARAMS(ROUTE PARAMETER)------------////

app.get('/api/user/:id',(req,res)=>{
    const userId = req.params.id;
    res.send(`User ID:${userId}`)
})


////----------QUERY STRING-------------------////


app.get('/api/search',(req,res)=>{
    const searchTerm = req.query.q;
    res.send(`Search result: ${searchTerm}`)
}) //Example URL: http://localhost:3000/api/search?q=JavaScript

/////----------QUERY STRING/URL PARAMETER-----------////

app.get('/api/users/:id',(req,res)=>{
    const userId = req.params.id;
    const detailLevel = req.query.detail;
    res.send(`user ID: ${userId}, Detail Level: ${detailLevel}`)
});


app.listen(3000,()=>{
    console.log('Running...');
    
})