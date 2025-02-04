var http = require("http");
var server =  http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Welcome to my Home page")
    } else if(req.url === "/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>Welcome to ABout page</h1>")
    } else if(req.url === "/contact"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>I am contact page</h1>")
    }else {
        res.end("try home page")
    }
})
server.listen(5000,()=>{
    console.log("listeniing to port 5000")
})