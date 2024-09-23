// sync is blocking operation

const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);

console.log("1");
const result= fs.readFileSync("./ReadThisFile.txt", "utf-8");  // utf-8 is encoding
console.log(result);
console.log("2");
//output:- 1
// I'm been read by the readFileSync
// 2         the output is so sync opertion blocks the thread it allow the other function only after its only completion

//async is non-blocking operation

console.log("1");
fs.readFileSync("./ReadThisFile.txt", "utf-8"), (err, result1) => {
    console.log(result1);
};
console.log("2");

//output:= 1
//2
//I'm been read by the readFileSync

// default thead pool size = 4
// max? depends upon the core of the system
