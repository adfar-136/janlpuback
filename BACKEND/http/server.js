const http =  require("http");
const fs = require("fs")
var server =  http.createServer((req,res)=>{
    // var data = fs.readFileSync("./index.html","utf-8");
    // res.writeHead(200,{"content-type":"text/plain"})
    // res.end(data)
    fs.readFile("./index.html",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"})
            res.end("Internal server error")
        }
        else {
            res.writeHead(200,{"content-type":"text/html"})
            res.end(data)
        }
    })

})
server.listen(4000,()=>{
    console.log("listening to port 4000")
})