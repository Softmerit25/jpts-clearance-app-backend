import nodemailer from "nodemailer";

const mail = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL_AUTH_USER,
        pass: process.env.EMAIL_AUTH_PASS,
    },
    tls: {
        rejectUnauthorized: false,
      },
      ignoreTLS: false,
  });


  export const handleMailDelivery = async(user, mailSubject, mailBody) =>{

     // verify connection configuration
     mail.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success, "Server is ready to take our messages");
        }
    });


    const template = mailBody();
    
    try {
     const mailOption = {
      from: '"JPTS Institute" <softmerit25@gmail.com>', 
      to: user?.email, 
      subject: mailSubject, 
      html: template,
     } 
        
    await mail.sendMail(mailOption);
    
    } catch (error) {
        console.log('Error in sending mail controller', + error.message);
    }
  }