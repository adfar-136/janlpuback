const http = require("http");
const students = require("./studentsArray");

const server = http.createServer((req,res)=>{
    let url = new URL(req.url,`http://${req.headers.host}`)
    let id = parseInt(url.searchParams.get("id"));
    if(req.method === "GET" && url.pathname === "/students"){
        if(id){
            const student = students.find((item)=>item.id === id);
            if(!student){
                res.writeHead(404,{"content-type":"text/plain"})
                res.end("Student not found")
            } else {
                res.writeHead(200,{"content-type":"application/json"})
                res.end(JSON.stringify(student))
            }
        } else {
            res.writeHead(200,{"content-type":"application/json"})
            res.end(JSON.stringify(students))
        }
    } else if (req.method === "POST" && url.pathname === "/students"){
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString()
        })
        req.on("end",()=>{
            let newStudent = JSON.parse(body);
            newStudent.id = students.length + 1;
            students.push(newStudent);
            res.writeHead(200,{"content-type":"application/json"})
            res.end(JSON.stringify(students))
        })
    } else if (req.method === "PUT" && url.pathname === "/students"){
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString()
        })
        req.on("end",()=>{
            let updatedStudent = JSON.parse(body);
            let index = students.findIndex((item)=>item.id === id);
            if(index !== -1){
                students[index] = {...students[index],...updatedStudent};
                res.writeHead(200,{"content-type":"application/json"})
                res.end(JSON.stringify(students))
            } else {
                res.writeHead(400,{"content-type":"text/plain"})
                res.end("Student not found")
            }
        })
    } else if (req.method === "DELETE" && url.pathname === "/students"){
        const index =  students.findIndex((item)=>item.id === id);
        if(index !== -1){
            const deletedStudent =  students.splice(index,1);
            res.writeHead(200,{"content-type":"application/json"})
            res.end(JSON.stringify(deletedStudent))
        } else {
            res.writeHead(400,{"content-type":"text/plain"})
            res.end("Student not found")
        }
    }

})

server.listen(4000,()=>{
    console.log("listening to port 4000")
})