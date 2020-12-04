const {USER,PASS,OUTEMAIL} = require("../config")
const nodemailer = require('nodemailer');
const AppointmentMailhtml = (nombre,correo,telefono,placas,fecha,hora,descripcion) =>{ 
    return (`
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=320, initial-scale=1" />
  <title>Airmail Invoice</title>
  <style type="text/css">

    /* ----- Client Fixes ----- */

    /* Force Outlook to provide a "view in browser" message */
    #outlook a {
      padding: 0;
    }

    /* Force Hotmail to display emails at full width */
    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    /* Force Hotmail to display normal line spacing */
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }


     /* Prevent WebKit and Windows mobile changing default text sizes */
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    /* Remove spacing between tables in Outlook 2007 and up */
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    /* Allow smoother rendering of resized image in Internet Explorer */
    img {
      -ms-interpolation-mode: bicubic;
    }

     /* ----- Reset ----- */

    html,
    body,
    .body-wrap,
    .body-wrap-cell {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      color: #464646;
      text-align: left;
    }

    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }

    table {
      border-collapse: collapse !important;
    }

    td, th {
      text-align: left;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      color: #464646;
      line-height:1.5em;
    }

    b a,
    .footer a {
      text-decoration: none;
      color: #464646;
    }

    a.blue-link {
      color: blue;
      text-decoration: underline;
    }

    /* ----- General ----- */

    td.center {
      text-align: center;
    }

    .left {
      text-align: left;
    }

    .body-padding {
      padding: 24px 40px 40px;
    }

    .border-bottom {
      border-bottom: 1px solid #D8D8D8;
    }

    table.full-width-gmail-android {
      width: 100% !important;
    }


    /* ----- Header ----- */
    .header {
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      height: 16px;
      padding-top: 19px;
      padding-bottom: 7px;
    }

    .header a {
      color: #464646;
      text-decoration: none;
    }

    /* ----- Footer ----- */

    .footer a {
      font-size: 12px;
    }
  </style>

  <style type="text/css" media="only screen and (max-width: 650px)">
    @media only screen and (max-width: 650px) {
      * {
        font-size: 16px !important;
      }

      table[class*="w320"] {
        width: 320px !important;
      }

      td[class="mobile-center"],
      div[class="mobile-center"] {
        text-align: center !important;
      }

      td[class*="body-padding"] {
        padding: 20px !important;
      }

      td[class="mobile"] {
        text-align: right;
        vertical-align: top;
      }
    }
  </style>

</head>
<body style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr>
 <td valign="top" align="left" width="100%" style="background:repeat-x url(https://www.filepicker.io/api/file/al80sTOMSEi5bKdmCgp2) #f9f8f8;">
 <center>

   <table class="w320 full-width-gmail-android" bgcolor="#f9f8f8" background="" style="background-color:transparent" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100%" height="48" valign="top">
            <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:49px;">
              <v:fill type="tile" src="https://www.filepicker.io/api/file/al80sTOMSEi5bKdmCgp2" color="#ffffff" />
              <v:textbox inset="0,0,0,0">
            <![endif]-->
              <table class="full-width-gmail-android" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td class="header center" width="100%">
                    <a href="#">
                      <img src="https://elgarage2.herokuapp.com/static/media/Logo.2beb9e6e.png" width=300 height = 150/>
                    </a>
                  </td>
                </tr>
              </table>
            <!--[if gte mso 9]>
              </v:textbox>
            </v:rect>
            <![endif]-->
        </td>
      </tr>
    </table>

    <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#ffffff">
      <tr>
        <td align="center">
          <center>
            <table class="w320" cellspacing="0" cellpadding="0" width="500">
              <tr>
                <td class="body-padding mobile-padding">

                <table cellspacing="0" cellpadding="0" width="100%">
                  
                  <tr>
                    <td class="left" style="padding-bottom:40px; text-align:left;">
                    Hola `+ nombre+`,<br>
                    Gracias por realizar una cita para el servicio de tu automobil!<br/>
                    Quedamos por confirmar su cita,puede que le contactemos para consultar mas informacion.
                    </td>
                  </tr>
                </table>

                <table cellspacing="0" cellpadding="10" width="100%">
                  <tr>
                    <td>
                      <b>Nombre</b>
                    </td>
                    <td>
                      <b>Correo</b>
                    </td>
                    <td>
                      <b>Teléfono</b>
                    </td>
                    <td>
                        <b>Placas</b>
                    </td>
                    <td>
                        <b>Día</b>
                    </td>
                    <td>
                        <b>Hora</b>
                    </td>
                    <td>
                        <b>Descripción</b>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                    <td class="border-bottom" height="5"></td>
                  </tr>
                  <tr>
                    <td style="padding-top:5px;">
                      `+nombre+`
                    </td>
                    <td style="padding-top:5px;">
                        `+correo+`
                      </td>
                    <td style="padding-top:5px;">
                     `+telefono+`
                    </td>
                    <td style="padding-top:5px;">
                        `+placas+`
                    </td>
                    <td style="padding-top:5px;">
                      `+fecha+`
                    </td>
                    <td style="padding-top:5px;">
                        `+hora+`
                      </td>
                    <td style="padding-top:5px;" class="mobile">
                      `+descripcion+`
                    </td>
                  </tr>
                </table>

                

                </td>
              </tr>
            </table>
          </center>
        </td>
      </tr>
    </table>

    <table class="w320" bgcolor="#E5E5E5" cellpadding="0" cellspacing="0" border="0" width="100%">
      
      <tr>
        <td style="border-top:1px solid #B3B3B3; border-bottom:1px solid #B3B3B3;" align="center">
          <center>
            <table class="w320" bgcolor="#E5E5E5" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="border-top:1px solid #B3B3B3;" align="center">
                    <center>
                      <table class="w320" cellspacing="0" cellpadding="0" width="500" bgcolor="#E5E5E5">
                        <tr>
                          <td>
                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#E5E5E5">
                              <tr>
                                <td class="center" style="padding:25px; text-align:center;">
                                  <b>Nosotros te mandaremos otro email cuando quede confirmada tu cita</b>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td style="border-top:1px solid #B3B3B3; border-bottom:1px solid #B3B3B3;" align="center">
                    <center>
                      <table class="w320" cellspacing="0" cellpadding="0" width="500" bgcolor="#E5E5E5">
                        <tr>
                          <td align="center" style="padding:25px; text-align:center">
                            <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#E5E5E5">
                              <tr>
                                <td class="center footer" style="font-size:12px;">
                                  <a href="#">Contact Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                  <span class="footer-group">
                                    <a href="#">Facebook</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a href="#">Twitter</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a href="#">Support</a>
                                  </span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </center>
                  </td>
                </tr>
              </table>
          </center>
        </td>
      </tr>
    </table>

  </center>
  </td>
</tr>
</table>
</body>
</html>

`
    )}

    const ConfirmAppointmentMailhtml = (nombre,correo,telefono,placas,fecha,hora,descripcion) =>{ 
        return (`
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=320, initial-scale=1" />
      <title>Airmail Invoice</title>
      <style type="text/css">
    
        /* ----- Client Fixes ----- */
    
        /* Force Outlook to provide a "view in browser" message */
        #outlook a {
          padding: 0;
        }
    
        /* Force Hotmail to display emails at full width */
        .ReadMsgBody {
          width: 100%;
        }
    
        .ExternalClass {
          width: 100%;
        }
    
        /* Force Hotmail to display normal line spacing */
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
    
    
         /* Prevent WebKit and Windows mobile changing default text sizes */
        body, table, td, p, a, li, blockquote {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        /* Remove spacing between tables in Outlook 2007 and up */
        table, td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
        /* Allow smoother rendering of resized image in Internet Explorer */
        img {
          -ms-interpolation-mode: bicubic;
        }
    
         /* ----- Reset ----- */
    
        html,
        body,
        .body-wrap,
        .body-wrap-cell {
          margin: 0;
          padding: 0;
          background: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: #464646;
          text-align: left;
        }
    
        img {
          border: 0;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
    
        table {
          border-collapse: collapse !important;
        }
    
        td, th {
          text-align: left;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: #464646;
          line-height:1.5em;
        }
    
        b a,
        .footer a {
          text-decoration: none;
          color: #464646;
        }
    
        a.blue-link {
          color: blue;
          text-decoration: underline;
        }
    
        /* ----- General ----- */
    
        td.center {
          text-align: center;
        }
    
        .left {
          text-align: left;
        }
    
        .body-padding {
          padding: 24px 40px 40px;
        }
    
        .border-bottom {
          border-bottom: 1px solid #D8D8D8;
        }
    
        table.full-width-gmail-android {
          width: 100% !important;
        }
    
    
        /* ----- Header ----- */
        .header {
          font-weight: bold;
          font-size: 16px;
          line-height: 16px;
          height: 16px;
          padding-top: 19px;
          padding-bottom: 7px;
        }
    
        .header a {
          color: #464646;
          text-decoration: none;
        }
    
        /* ----- Footer ----- */
    
        .footer a {
          font-size: 12px;
        }
      </style>
    
      <style type="text/css" media="only screen and (max-width: 650px)">
        @media only screen and (max-width: 650px) {
          * {
            font-size: 16px !important;
          }
    
          table[class*="w320"] {
            width: 320px !important;
          }
    
          td[class="mobile-center"],
          div[class="mobile-center"] {
            text-align: center !important;
          }
    
          td[class*="body-padding"] {
            padding: 20px !important;
          }
    
          td[class="mobile"] {
            text-align: right;
            vertical-align: top;
          }
        }
      </style>
    
    </head>
    <body style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
     <td valign="top" align="left" width="100%" style="background:repeat-x url(https://www.filepicker.io/api/file/al80sTOMSEi5bKdmCgp2) #f9f8f8;">
     <center>
    
       <table class="w320 full-width-gmail-android" bgcolor="#f9f8f8" background="" style="background-color:transparent" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td width="100%" height="48" valign="top">
                <!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:49px;">
                  <v:fill type="tile" src="https://www.filepicker.io/api/file/al80sTOMSEi5bKdmCgp2" color="#ffffff" />
                  <v:textbox inset="0,0,0,0">
                <![endif]-->
                  <table class="full-width-gmail-android" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td class="header center" width="100%">
                        <a href="#">
                          <img src="https://elgarage2.herokuapp.com/static/media/Logo.2beb9e6e.png" width=300 height = 150/>
                        </a>
                      </td>
                    </tr>
                  </table>
                <!--[if gte mso 9]>
                  </v:textbox>
                </v:rect>
                <![endif]-->
            </td>
          </tr>
        </table>
    
        <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#ffffff">
          <tr>
            <td align="center">
              <center>
                <table class="w320" cellspacing="0" cellpadding="0" width="500">
                  <tr>
                    <td class="body-padding mobile-padding">
    
                    <table cellspacing="0" cellpadding="0" width="100%">
                      
                      <tr>
                        <td class="left" style="padding-bottom:40px; text-align:left;">
                        Hola `+ nombre+`,<br>
                        Ya quedo confirmada su cita que solicito!<br/>
                        Esperamos verlo pronto!
                        </td>
                      </tr>
                    </table>
    
                    <table cellspacing="0" cellpadding="10" width="100%">
                      <tr>
                        <td>
                          <b>Nombre</b>
                        </td>
                        <td>
                          <b>Correo</b>
                        </td>
                        <td>
                          <b>Teléfono</b>
                        </td>
                        <td>
                            <b>Placas</b>
                        </td>
                        <td>
                            <b>Día</b>
                        </td>
                        <td>
                            <b>Hora</b>
                        </td>
                        <td>
                            <b>Descripción</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                        <td class="border-bottom" height="5"></td>
                      </tr>
                      <tr>
                        <td style="padding-top:5px;">
                          `+nombre+`
                        </td>
                        <td style="padding-top:5px;">
                            `+correo+`
                          </td>
                        <td style="padding-top:5px;">
                         `+telefono+`
                        </td>
                        <td style="padding-top:5px;">
                            `+placas+`
                        </td>
                        <td style="padding-top:5px;">
                          `+fecha+`
                        </td>
                        <td style="padding-top:5px;">
                            `+hora+`
                          </td>
                        <td style="padding-top:5px;" class="mobile">
                          `+descripcion+`
                        </td>
                      </tr>
                    </table>
    
                    
    
                    </td>
                  </tr>
                </table>
              </center>
            </td>
          </tr>
        </table>
    
        <table class="w320" bgcolor="#E5E5E5" cellpadding="0" cellspacing="0" border="0" width="100%">
          
          <tr>
            <td style="border-top:1px solid #B3B3B3; border-bottom:1px solid #B3B3B3;" align="center">
              <center>
                <table class="w320" bgcolor="#E5E5E5" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td style="border-top:1px solid #B3B3B3;" align="center">
                        <center>
                          <table class="w320" cellspacing="0" cellpadding="0" width="500" bgcolor="#E5E5E5">
                            <tr>
                              <td>
                                <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#E5E5E5">
                                  <tr>
                                    <td class="center" style="padding:25px; text-align:center;">
                                      <b>Muchas Gracias por hacer su cita!</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td style="border-top:1px solid #B3B3B3; border-bottom:1px solid #B3B3B3;" align="center">
                        <center>
                          <table class="w320" cellspacing="0" cellpadding="0" width="500" bgcolor="#E5E5E5">
                            <tr>
                              <td align="center" style="padding:25px; text-align:center">
                                <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#E5E5E5">
                                  <tr>
                                    <td class="center footer" style="font-size:12px;">
                                      <a href="#">Contact Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                      <span class="footer-group">
                                        <a href="#">Facebook</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                        <a href="#">Twitter</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                        <a href="#">Support</a>
                                      </span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </center>
                      </td>
                    </tr>
                  </table>
              </center>
            </td>
          </tr>
        </table>
    
      </center>
      </td>
    </tr>
    </table>
    </body>
    </html>
    
    `
        )}



const mailAppointment =  async function  (nombre,correo,telefono,placas,fecha,hora,descripcion){
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
        from: nombre,
        to: correo,  
        subject: "Cita El Garage",
    
        html: AppointmentMailhtml(nombre,correo,telefono,placas,fecha,hora,descripcion)
      }
      
      var transporter = nodemailer.createTransport(transport)

      transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            return(false)
        } else {
            console.log('message Send');
            return(true)
        }
      })
    }
    const mailConfirmAppointment =  async function  (nombre,correo,telefono,placas,fecha,hora,descripcion){
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
            from: nombre,
            to: correo,  
            subject: "Confirmacion de Cita El Garage",
        
            html: ConfirmAppointmentMailhtml(nombre,correo,telefono,placas,fecha,hora,descripcion)
          }
          
          var transporter = nodemailer.createTransport(transport)
    
          transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err);
                return(false)
            } else {
                console.log('message Send');
                return(true)
            }
          })
        }


module.exports ={
    mailAppointment,
    mailConfirmAppointment
}
