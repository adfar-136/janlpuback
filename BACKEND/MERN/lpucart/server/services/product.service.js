const { Product } = require("../models")

const getProductsById = async (id)=>{
    return Product.findById(id)
}

const getProducts = async()=>{
    return Product.find({})
}

module.exports = {
    getProducts,
    getProductsById
}