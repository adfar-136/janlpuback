const http = require("http");
const url =  require("url");

const server = http.createServer((req,res)=>{
  const queryObj = url.parse(req.url,true).query;
  console.log(queryObj)
  res.writeHead(200,{"content-type":"text/plain"})
  res.end(`Hello, ${queryObj.name || "Guest"}!`)
})
server.listen(4000,()=>[
    console.log("listening to port 4000")
])