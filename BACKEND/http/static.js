// var http = require("http")
// var fs = require("fs")
// var server =  http.createServer((req,res)=>{
//     var data = fs.readFileSync("./public/index.html","utf-8")
//     res.end(data)

// })

// server.listen(4000,()=>{
//     console.log("listening to port 4000")
// })


var http = require("http")
var fs = require("fs")
var path = require("path")
var server =  http.createServer((req,res)=>{
    let filePath = path.join(__dirname,"pub",req.url === "/"?"index.html":req.url);
    let contentType = "text/html"
    let extName = path.extname(filePath)
    let obj = {
        ".html":"text/html",
        ".css" : "text/css",
        ".js":"text/js",
        ".png":"image/png",
        ".jpg":"image/jpg",
        ".jpeg":"image/jpeg"
    }
    contentType = obj[extName]
    fs.readFile(filePath,(err,data)=>{
        if(err){
            fs.readFile(path.join(__dirname,"public",req.url === "/"?"404.html":req.url),(error,content)=>{
                res.writeHead(404,{"Content-Type":contentType})
                res.end(content)
            })
        } else {
                res.writeHead(200,{"Content-Type":contentType})
                res.end(data)
        }
    })
    
})

server.listen(4000,()=>{
    console.log("listening to port 4000")
})










