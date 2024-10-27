
///---------DIRNAME--------------//
console.log(__dirname);// output:  C:\Users\Lenovo\OneDrive\Desktop\Node

////----------FILENAME----------///

console.log(__filename);//output:  C:\Users\Lenovo\OneDrive\Desktop\Node\BuiltInModule.js

////------------HTTP (Creates a simple server)----------///

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("Hello world");
}).listen(3000,()=>{
    console.log('Server is running...');
    
});

///-------------FS ( Reads a file's content)-----------------////

const fs = require('fs');
fs.readFile('./Files/example.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data);
    
});

///-----------PATH ( joins two paths)-----------------------///

const path = require('path');

const filePath = path.join(__dirname,'./Files/example.txt');
console.log(filePath);

///-----------EVENTS (Creates and triggers a custom event)------///

const event = require('events');
const eventEmitter = new event();

eventEmitter.on('greet',()=>{
    console.log('Hello');
})

eventEmitter.emit('greet');


