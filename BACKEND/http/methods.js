var http = require("http");
const server =  http.createServer((req,res)=>{
  if(req.url === "/" && req.method === "GET"){
    res.writeHead(200,{"Content-Type":"text/palin"})
    res.end("Welcome to home page")
  } else if(req.url === "/about" && req.method === "POST"){
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({message:"About page accessed"}))
  } else if(req.url === "/data" && req.method === "PUT"){
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({message:"Data Updated Succefully"}))
  } else if(req.url === "/data" && req.method === "DELETE"){
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({message:"Data Deleted Succefully"}))
  }
})
server.listen(5000,()=>{
    console.log("listening to port 5000")
})