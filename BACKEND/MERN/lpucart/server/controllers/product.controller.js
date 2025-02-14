const { productService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getProductById = catchAsync(async (req,res)=>{
    const product = await productService.getProductsById(req.params.productId)
    if(!product){
        res.status(404).send("Product with this id does not exist")    
    }
    res.send(product)
})

const getProducts = catchAsync(async (req,res)=>{
    const products = await productService.getProducts();
    res.send(products)
})

module.exports ={
    getProducts,
    getProductById
}