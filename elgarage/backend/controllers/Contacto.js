const app = require("../app");
const {USER,PASS,OUTEMAIL} = require("../config")
const nodemailer = require('nodemailer');
const sendMail =  async function (req, res) {
    console.log(req.body)
    var transport = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
          user: USER,
          pass: PASS
        }
      }
      var mail = {
        from: req.body.nombre,
        to: OUTEMAIL,  
        subject: req.body.asunto,
    
        html: req.body.mensaje
      }
      
      var transporter = nodemailer.createTransport(transport)

      transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(error);
            return res.status( 400 ).end();
        } else {
            console.log('message Send');
            return res.status( 200 ).json("ok");
        }
      })
    

}

module.exports = {
    sendMail
}