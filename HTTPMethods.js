

const express = require('express');
const app = express();
app.use(express.json());


///-------APP.ALL()==> used to handle all HTTP methods for a specific route.
app.all('/example',(req,res)=>{
    res.send('This responds to all HTTP methods');
})

////----------GET(Retrieve data)------------////

app.get('/',(req,res)=>{
    res.status(200).send('This is get request')
});


////----------POST(Send data)----------------////

app.post('/',(req,res)=>{
    const data = req.body;
    res.send(`Data recieved: ${JSON.stringify(data)}`)
});

/////-----------PUT(Update/Replace Data)-----////

app.put('/',(req,res)=>{
    const updatedData = req.body;
    res.send(`Data updated: ${JSON.stringify(updatedData)}`)
})

////------------DELETE(Delete data)---------////

app.delete('/',(req,res)=>{
    res.send('Data deleted')
})

////-----------PATCH(Partially update data)----////

app.patch('/',(req,res)=>{
    const partialData = req.body;
    res.send(`Data partially updated: ${JSON.stringify(partialData)}`);
})

///----------HEAD IN EXPRESS---------------------////

app.head('/',(req,res)=>{
    res.set('Custom-Header','Value');
    res.status(200).end();
})

app.listen(3000,()=>{
    console.log('server is running on 3000');
    
});

////--------------HTTP COMPRESSION

const compression = require('compression')
app.use(compression()) // automatically compress responses

