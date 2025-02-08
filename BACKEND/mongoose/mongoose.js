const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/lpuuuu").then(()=>{
    console.log("connect to db")
}).catch((err)=>{
 console.log(err)
})

const studentSchema =  new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    phone:Number,
    course:String,
    marks:Number
})
const Student = new mongoose.model("Students",studentSchema);
const addStudents = async()=>{
  await Student.insertMany([
    {name:"Adfar",age:28,email:"adfar@gmail.com",phone:123456789,course:"MERN",marks:80},
    {name:"Sonu",age:22,email:"sonu@gmail.com",phone:344456754,course:"Data Science",marks:90},
    {name:"Aryan",age:21,email:"aryan@gmail.com",phone:5675446,course:"MERN",marks:89},
    {name:"Goutham",age:20,email:"goutham@gmail.com",phone:7435334756,course:"AI/ML",marks:70},
    {name:"Shivam",age:20,email:"shivam@gmail.com",phone:53542234242,course:"Cyber",marks:87},
  ])
}
const avgMarksByCourse =async()=>{
    const res =  await Student.aggregate([
        {$group : {_id:"$course",avgMarks:{$avg:"$marks"}}}
    ]);
    console.log(res)
}
avgMarksByCourse()
// const studentInCourse = async ()=>{
//     const students = await Student.find({course :{$in:["MERN","AI/ML"]}})
//     console.log(students)
// }
// studentInCourse()
// const findStudents =  async ()=>{
//     const students = await Student.find({marks:{$gt:70,$lt:90}})
//     console.log(students)
// }
// // addStudents()
// findStudents()