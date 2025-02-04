// var path = require("path")

// // let p = "C:/Users/LEGION/Desktop/9w605/BACKEND/path/index.js";
// // console.log(path.dirname(p))
// // console.log(path.basename(p))
// // console.log(path.extname(p))
// // console.log(path.parse(p))

// // var obj = {
// //     root: 'C:/ignored',
// //     dir: 'C:/Users/LEGION/Desktop/9w605/BACKEND/path',
// //     base: 'index.js',
// //     ext: './ignored',
// //     name: './ignored'
// //   }
// //   console.log(path.format(obj))

// // var p = path.join("videos","public","adfar","html");
// // console.log(p)
// // console.log(__dirname)
// var fs = require("fs");
var path = require("path")
// var data = fs.readFileSync(path.join(__dirname,"public","index.html"),"utf-8");
// console.log(data)
var p = path.join(__dirname,"public","index.html");
console.log(path.isAbsolute(p))