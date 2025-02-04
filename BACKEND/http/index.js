const http = require("http");
http.createServer((req,res)=>{
    // res.write("This is my first Server Application \n");
    // res.write("This is my first Server Application \n");
    // res.write("This is my first Server Application \n");
    // res.write("<h1>My name is Adfar Rasheed</h1>");
    res.end("<h1>My name is Adfar Rasheed</h1>")
}).listen(5000,()=>{
    console.log("Server is running on port 5000")
})
// const server =  http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"})
//     res.end("Hello, this is my first web server")
// })
// server.listen(5000,()=>{
//     console.log("listening to port 5000")
// })