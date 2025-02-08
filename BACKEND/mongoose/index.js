const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/lpu2025").then(()=>{
    console.log("connected to local db")
})
const studentSchema = new mongoose.Schema({
   name:String,
   age:Number,
   email:String,
   phone:Number 
})
const students = new mongoose.model("Students",studentSchema);

const adder=async ()=>{
//   const student1 = new students({
//     name:"Adfar",
//     age:20,
//     email:"adfar@gmail.com",
//     phone:7006525041
//   })
//  await student1.save()
  students.create({
    name:"Aryan",
    age:22,
    email:"aryan@gmail.com",
    phone:234567343
  })
  const a =  await students.findOne({name:"Adfar"})
  console.log(a)
}
adder()