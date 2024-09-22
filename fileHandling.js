//Where diving into this topic we must be 
//familiar with nodeJs architecture

const fs = require("fs")
// sync
fs.writeFileSync("./test.txt", "Hey I got created, by this function!");
// this function doesn't require callback 
// Async
fs.writeFile("./test.txt", "I'm in async word and needs callback function", (err)=>{});

//reading fileSync
// this can always  give output if we do console .log
const result= fs.readFileSync("./ReadThisFile.txt", "utf-8");  // utf-8 is encoding
console.log(result);

//reading fileAsync
// in this in order to get sometthing in return you have to give callback
// function

fs.readFile("./fileHandling.txt","utf-8", (err, result) =>{
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
});

// learning about the appendFileSync it doesn't overwrite the data
// it only append the data
fs.appendFileSync("./test.txt", 'Hello There\n');

// you might be thinking where this appendfile need to be used
// so if user get connected to our server so this we can see at 
// which time user requested for whichh query and when

// fs.cpSync("./test.txt","./copy.txt")// it is used to copy the file
// fs.unlikeSync("./copy.txt"); it is  used to delete the file
console.log(fs.statSync(".test.txt").isFile());
// it is used to get all the all the details 