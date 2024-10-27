const express = require('express')
const app = express()
const session = require('express-session')

app.use((req,res,next)=>{
    if(req.session.isLoggedIn){
        next()
    }
})