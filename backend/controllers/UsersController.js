const {Users} = require("../models/UsersModel");
const bcrypt = require( 'bcryptjs' );
const jsonwebtoken = require( 'jsonwebtoken' );
const { SECRET} = require( '../config' );
const bodyParcer = require('body-parser');
const jsonParser = bodyParcer.json();

const UserLogin = async function(req,res){
    let { email, password } = req.body;

    console.log(email)
    console.log(password)
    if(!email || !password ){
        res.statusMessage = "Parameter missing in the body of the request.";
        return res.status( 406 ).end();
    }
  
    Users
        .getUserByEmail( email )
        .then( user => {
            bcrypt.compare( password, user.password )
                .then( result => {
                    if( result ){
  
                        let userData = {
                            name : user.name,
                            last_name : user.last_name,
                            type:user.type,
                            email : user.email
                        };
  
                        jsonwebtoken.sign( userData, SECRET, {expiresIn : '30m'}, ( err, token ) => {
                            if( err ){
                                res.statusMessage = err.message;
                                return res.status( 400 ).end();
                            }
                            return res.status( 200 ).json( { token } );
                        });
                    }
                    else{
                        res.statusMessage = "Wrong credentials.";
                        return res.status( 409 ).end();
                    }
                })
                .catch( err => {
                    res.statusMessage = err.message;
                    return res.status( 400 ).end();
                });
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 400 ).end();
        });
}
const UserSignUp = async function(req,res){
    console.log( "Body ", req.body );

    let name = req.body.name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    if( !name  || !email || !password || !last_name){
        res.statusMessage = "One parameter is missing";
        return res.status( 406 ).end();
    }

    bcrypt.hash(password, 10)
        .then( hashedPassword => {
            let newUser = {
                name,
                last_name,
                type: "normal",
                password : hashedPassword,
                email
            };

            Users
                .createUser( newUser )
                .then(result => {
                    return res.status(201).json( result );
                })
                .catch(err => {
                    res.statusMessage = "Something went wrong with the DB,Try again Later.";
                    return res.status(500).end();
                })
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 400 ).end();
        });
};
module.exports = {
    UserLogin : UserLogin,
    UserSignUp : UserSignUp

  };
