var JWTStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;

var passport = require("passport")
const UserModel = require("./database");
var opts={};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secretkey";
passport.use(new JWTStrategy(opts,async function(jwt_payload,done){
    console.log(jwt_payload)
    const user = await UserModel.findOne({_id:jwt_payload.id})
        console.log(user)
        if(user){
            return done(null,user)
        } else {
            return done(null,false)
        }
    
}))