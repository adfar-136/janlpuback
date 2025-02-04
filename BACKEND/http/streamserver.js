const http = require("http")
const fs= require("fs")

const server =  http.createServer((req,res)=>{
  const readStream = fs.createReadStream("largeData.txt");
  readStream.pipe(res)
})

server.listen(5000,()=>{
    console.log("listening to port 5000")
})