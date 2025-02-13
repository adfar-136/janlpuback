const Joi = require("joi")
const path = require("path");
const dotenv = require("dotenv")

const DEFAULT_WALLET_MONEY = 500;
const DEFAULT_ADDRESS = "ADDRESS_NOT_SET";
const DEFAULT_PAYMENT_OPTION = "PAYMENT_OPTION_DEFAULT"

dotenv.config({path : path.join(__dirname,"../.env")})

const envVarsSchema = Joi.object().keys(
    {
        PORT : Joi.number().default(3000),
        MONGODB_URL :Joi.string().required().description("Mongo db url"),
        JWT_SECRET :Joi.string().required().description("JWT Secret Key"),
        JWT_ACCESS_EXPIRATION_MINUTES : Joi.number().default(30).description("Minutes after which access token expires")
    }
).unknown()

const {value:envVars,error}=  envVarsSchema.prefs({errors :{label :"key"}}).validate(process.env)
if(error){
    throw new Error("Config Validation Error: ", error.message)
}

module.exports = {
    port:envVars.PORT,
    mongoose : {
        url :envVars.MONGODB_URL
    },
    default_wallet_money : DEFAULT_WALLET_MONEY,
    default_address : DEFAULT_ADDRESS,
    default_payment_option : DEFAULT_PAYMENT_OPTION,
    jwt: {
        secret :envVars.JWT_SECRET,
        accessExpirationMinutes : envVars.JWT_ACCESS_EXPIRATION_MINUTES
    } 
}