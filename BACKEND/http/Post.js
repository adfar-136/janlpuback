const http = require("http");
const server = http.createServer((req,res)=>{
  if(req.url === "/submit" && req.method === "POST"){
    let body = "";
    req.on("data",chunk=>{
        body += chunk.toString()
    })
    req.on("end",()=>{
        const parsedData = JSON.parse(body);
        res.end(JSON.stringify({message:`Hello welcome ${parsedData.username}, your email is : ${parsedData.email} ,  and your password is ${parsedData.password}`}))
    })
  }
})

server.listen(4000,()=>{
    console.log("listening to port 4000")
})