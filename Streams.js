////---------------READABLE STREAMS (To read data)-----------////

const fs = require('fs')

const readableStream = fs.createReadStream('./Files/example.txt','utf-8');

readableStream.on('data',(chunk)=>{
    console.log('Reading data chunk:', chunk);
    
});

readableStream.on('end',()=>{
    console.log('Finished...');
    
});

////----------------WRITABLE STREAM (To write data)----------////

const writableStream = fs.createWriteStream('./Files/output.txt');

writableStream.write('Hello');
writableStream.end();

writableStream.on('finish',()=>{
    console.log('Data has been written.');
});

////--------------DUPLEX STREAM (Both readable and writable)--////

const { Duplex } = require('stream');

const duplexStream = new Duplex({
    read(size){
        this.push('Data from readable side');
        this.push(null)// end the readable stream
    },
    write(chunk,encoding,callback){
        console.log('Data written to writable side:',chunk.toString());
        callback(); // writing complete
    }
});

duplexStream.on('data',(chunk)=>{
    console.log(chunk.toString());
    
});
duplexStream.write('Writing to writable side');
duplexStream.end();

////------------------TRANSFORM STREAM(Duplex streams that can modify or transform the data)---////

const { Transform } = require('stream')

const transformStream = new Transform({
    transform(chunk,encoding,callback){
        const transformedData = chunk.toString().toUpperCase();//transformation 
        this.push(transformedData)// pushed to the readable stream
        callback();
    }
});

transformStream.on('data',(chunk)=>{
    console.log('Transformed data:',chunk.toString());
    
});

transformStream.write('hello');
transformStream.write('world');
transformStream.end()

////-------------------PIPE(To connect multiple streams)----------////

const readStream = fs.createReadStream('./Files/input.txt');
const writeStream = fs.createWriteStream('./Files/output.txt');

const transStream = new Transform({
    transform(chunk,encoding,callback){
        const upperCaseData = chunk.toString().toUpperCase();
        this.push(upperCaseData);
        callback();
    }
})

readStream.pipe(transStream).pipe(writeStream);

writeStream.on('finish',()=>{
    console.log('Data has been piped from input and transformed to output.');
    
});