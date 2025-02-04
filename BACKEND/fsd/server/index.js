const http = require("http")
const fs = require("fs");
const path = require("path")
const userFilePath = path.join(__dirname,"users.json")
const getUsers =()=>{
    if(!fs.existsSync(userFilePath)) return [];
    return JSON.parse(fs.readFileSync(userFilePath,"utf-8"))

}
const saveUsers=(users)=>{
    fs.writeFileSync(userFilePath,JSON.stringify(users))
}
const server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","POST,GET");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    if(req.method === "OPTIONS"){
        res.writeHead(204)
        return res.end()
    }
    if(req.url === "/signup" && req.method === "POST"){
        let body ="";
        req.on("data",chunk =>body += chunk.toString())
        req.on("end",()=>{
            const {username,password} = JSON.parse(body);
           let users = getUsers()
           const user = users.find((item)=>item.username === username);
           if(user){
            res.writeHead(400,{"Content-Type":"application/json"});
            return res.end(JSON.stringify({message:"User already exists"}))
           }
           users.push({username,password});
           saveUsers(users)
           res.writeHead(201,{"Content-Type":"application/json"})
           res.end(JSON.stringify({message:"User registered succefully"}))
        })
    } else if(req.url === "/login" && req.method === "POST"){
        let body = "";
        req.on("data",chunk=>body += chunk);
        req.on("end",()=>{
            const {username,password} = JSON.parse(body);
            let users = getUsers();
            let user = users.find(item => item.username === username  && item.password === password)
            if(user){
                res.writeHead(200,{"Content-Type":"application/json"})
                res.end(JSON.stringify({message:"User logged in succefully"}))
            } else {
                res.writeHead(201,{"Content-Type":"application/json"})
                res.end(JSON.stringify({message:"Invalid Credentials"}))
            }
        })
    }
})
server.listen(5000,()=>{
    console.log("listening to port 5000")
})