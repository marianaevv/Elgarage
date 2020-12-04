const mongoose = require('mongoose');

const UsersCollectionSchema = mongoose.Schema({

    name :{
        type: String,
        required : true,
    },
    last_name:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required : true,
    },
    type:{
        type:String,
        required: true
    },
    password : {
        type : String,
        required : true
    }
});

const UsersCollection = mongoose.model('users', UsersCollectionSchema);

const Users = {
    createUser : function(newUser){
        return UsersCollection.create(newUser)
        .then ( createdUser =>{
            return createdUser
        })
        .catch(err =>{
            return err;
        });
    },
    getAllUsers : function(){
        return UsersCollection
        .find()
        .then(allUsers =>{
            return allUsers
        })
        .catch(err =>{
            return err;
        });
    },
    getUserByEmail : function( email ){
        return UsersCollection
                .findOne( { email } )
                .then( user => {
                    return user;
                })
                .catch( err => {
                    throw new Error( err.message );
                }); 
    },
    getUserById : function( id ){
        return UsersCollection
                .findOne( { _id: id } )
                .then( user => {
                    return user;
                })
                .catch( err => {
                    throw new Error( err.message );
                }); 
    },
    deleteUserByName : function( nameObj ){
        UsersCollection
            .deleteOne( { name : nameObj })
            .then( result => {
                return result;
            })
            .catch( err => {
                throw new Error( err.message );
            }); 
    }
}

module.exports = {Users};