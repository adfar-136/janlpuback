var fs= require("fs");
// fs.readFile("data.json","utf-8",(err,data)=>{
//    if(err){
//     console.log("there is an error")
//    } else {
//     console.log(data)
//    }
// })
// fs.writeFile("adfar.html","<h1>Hello Welcome to LPU portal</h1>",()=>{

// });
// fs.appendFile("adfar","Hello welcome to lpuuuuuu",()=>{
//     console.log("file is appended successfully")
// })
fs.unlink("adfar.html",()=>{
    console.log("file is deleted successfully")
})