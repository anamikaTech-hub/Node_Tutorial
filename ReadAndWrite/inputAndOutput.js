const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name:',(name)=>{
    console.log('You have entered:',name)
    rl.close()
});

rl.on('close',()=>{
    console.log('Interface closed');
    
})