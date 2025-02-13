
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    category : {
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},
{
    timeStamps:false
}
)

const Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;
module.exports.productSchema = productSchema; 