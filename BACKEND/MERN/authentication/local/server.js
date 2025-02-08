const express = require("express");
const passport  = require("passport");
const ejs = require("ejs");
const bodyParser = require("body-parser")

const expressSession = require("express-session")
const {connectMongoose,User} = require("./database")
const {initializingPassport,isAuthenticated} = require("./passportConfig");

const app = express();
app.set("view engine","ejs");

app.use(expressSession({secret:"secret"}))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(passport.initialize());
app.use(passport.session())
connectMongoose();
initializingPassport(passport);
app.get("/",(req,res)=>[
    res.render("index")
])
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",passport.authenticate("local",
    {successRedirect:"/profile",failureRedirect:"/register"}
))
app.post("/register",async(req,res)=>{
    console.log(req.body)
    const user = await User.findOne({username:req.body.username})
    if(user) return res.status(400).send("User already exists")
        const newUser = await User.create(req.body);
    return res.status(201).send(newUser)
})
app.get("/logout",(req,res)=>{
    req.logOut(()=>{

    })
    res.send("loggedout successfully")
})
app.get("/profile",isAuthenticated,(req,res)=>{
    res.send("welcome to your app")
})
app.listen(8000,()=>{
    console.log("listening to port 8000")
})