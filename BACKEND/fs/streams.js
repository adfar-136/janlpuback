var fs = require("fs");
// const readstream = fs.createReadStream("./adfar.txt","utf-8")
// var result;
// readstream.on("data",(chunk)=>{
//     result+=chunk;
//     console.log("received chunk :", chunk);
// })
// readstream.on("end",()=>{
//     console.log("end of file" ,result);
// })
// const writeStream = fs.createWriteStream("output.txt")
// writeStream.write("This is my first chunk. \n");
// writeStream.write("This is my second chunk. \n");
// writeStream.write("This is my third chunk. \n");
// writeStream.end("end",()=>{
//     console.log("end of writing");
// })
const readStream =  fs.createReadStream("./adfar.txt")
const writeStream = fs.createWriteStream("output.txt")

readStream.pipe(writeStream)
console.log("data piped succesfully")