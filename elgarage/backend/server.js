const app = require("./app");
const { PORT,CONNECTION_URL } = require("./config");
const mongoose = require("mongoose");
app.listen(PORT,() =>
{
    new Promise( (resolve,reject) =>{

        const settings = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        };

        mongoose.connect(CONNECTION_URL,settings,(err) =>{
            if (err){
                reject(err);
            }
            else{
                console.log("Database connected");
                return resolve();
            }
        });
    })
    .catch(err =>{
        mongoose.disconnect();
        console.log(err);
    })
    console.log("This server is using port "+PORT);
});
