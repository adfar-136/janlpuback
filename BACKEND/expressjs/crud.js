const express = require("express");
const studentArray = require("./studentArray")
const app = express();
app.use(express.json())

var currentId = studentArray.length
app.get("/api/students",(req,res)=>{
    res.send(studentArray)
})
app.get("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    if(!isNaN(id)){
        id= parseInt(id)
        let student = studentArray.find((item)=>item.id === id);
        if(student === undefined){
         return  res.status(404).send("STudent Not Found")
        }
       return res.status(200).send(student)
    } else {
        return res.status(400).send("Bad Request")
    }
})
app.post("/api/students",(req,res)=>{
    let {name,currentClass,division} = req.body;
    let bodyKeys = Object.keys(req.body)
    console.log(bodyKeys)
    // if(bodyKeys.find((item)=>item === "name") && bodyKeys.find(item=>item==="currentClass") && bodyKeys.find((item)=>item === "division")){

    // }
    if(bodyKeys.includes("name") && bodyKeys.includes("currentClass") && bodyKeys.includes("division")){
       if(!isNaN(req.body.currentClass)){
        currentId++;
        studentArray.push({id:currentId,name:name,currentClass:parseInt(currentClass),division:division})
        res.send(studentArray)
       } else {
        res.status(400).send("Bad request")
       }
    } else {
        res.status(400).send("Bad request")
    }
    // if(name && currentClass && division){
    //     currentId++;
    //     studentArray.push({id:currentId,name:name,currentClass:currentClass,division:division})
    //     res.send(studentArray)
    // }
    
})
app.put("/api/students/:id",(req,res)=>{
    let id  = req.params.id;
    if(!isNaN(id)){
      id = parseInt(id)
      let oldObj =  studentArray.find(item=>item.id === id);
      if(oldObj === undefined){
          return res.status(404).send("Student Not Found")
      }
      let body = req.body;
      let newStudent = {...oldObj,...body};
      let index= studentArray.indexOf(oldObj)
      studentArray.splice(index,1)
      studentArray.push(newStudent)
      res.send(studentArray)
    } else {
      return res.status(400).send("Bad Request")
    }
    
  })
app.patch("/api/students/:id",(req,res)=>{
  let id  = req.params.id;
  if(!isNaN(id)){
    id = parseInt(id)
    let oldObj =  studentArray.find(item=>item.id === id);
    if(oldObj === undefined){
        return res.status(404).send("Student Not Found")
    }
    let body = req.body;
    let newStudent = {...oldObj,...body};
    let index= studentArray.indexOf(oldObj)
    studentArray[index] = newStudent;
    res.send(studentArray)
  } else {
    return res.status(400).send("Bad Request")
  }
  
})
app.delete("/api/students/:id",(req,res)=>{
    if(!isNaN(req.params.id)){
        let id = req.params.id;
    let student =  studentArray.find(item=>item.id == id);
    if(student===undefined){
        return res.status(404).send("Student not found")
    }
    let index = studentArray.indexOf(student)
    studentArray.splice(index,1)
    res.send(studentArray)
    } else {
        return res.status(400).send("Bad Request")
    }

})
app.listen(4000,()=>{
    console.log("listening to port 4000")
})