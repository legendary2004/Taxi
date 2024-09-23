import express from "express";
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ElasticEmail from "@elasticemail/elasticemail-client";
import nodemailer from "nodemailer"
import { profileUpload } from "./profileUpload.js"

dotenv.config({path: './.env'})

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: process.env.db_host, 
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    port: process.env.db_port
})

db.connect(error => {
    if (error) {
        console.log("Cant connect");
    }
    else {
        console.log("Connected");
    }
})

// function sendEmail(email, subject, message) {
//     let defaultClient = ElasticEmail.ApiClient.instance;
 
//     let apikey = defaultClient.authentications['apikey'];
//     apikey.apiKey = process.env.api_key

//     const api = new ElasticEmail.EmailsApi();

//     const emailToSend = ElasticEmail.EmailMessageData.constructFromObject({
//       Recipients: [
//         new ElasticEmail.EmailRecipient(email)
//       ],
//       Content: {
//         Body: [
//           ElasticEmail.BodyPart.constructFromObject({
//             ContentType: "HTML",
//             Content: message
//           })
//         ],
//         Subject: subject,
//         From: process.env.email
//       }
//     });
      
//     var callback = function(error, data, response) {
//       if (error) {
//         console.error(error);
//         return;
//       }
//     };
//     api.emailsPost(emailToSend, callback);
// }

function sendEmail(from, to, subject, text) {
    let transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: process.env.secure, 
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    });

    let mailOptions = {
        from,
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function generateNumber(res, from, to) {
  const randomNum = Math.floor(1000 + Math.random()  * 9000)
  sendEmail(from, to, "Code verification", `Your code is: ${randomNum}`)
  res.send({
      number: "" + randomNum
  })
}

app.post("/register", (req, res) => {
    const {email, pass, passRepeat} = req.body

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send({
                message: err
            })
        }
        else if (result.length > 0) {
            res.send({
                message: "This email is already in use"
            })
        }
        else if (pass != passRepeat) {
            res.send({
                message: "Passwords do not match"
            })
        }
        else {
            generateNumber(res, process.env.email, req.body.email)
        }
    })
})

app.post("/resendCode", (req, res) => {
  generateNumber(res, process.env.email, req.body.email)
})

app.post("/confirmCode", (req, res) => {

  profileUpload(req, res, (errr) => {
      if (errr) console.log(errr)   
      else {
          const {firstName, lastName, email, phone, password} = req.body
          const img = req.file ? req.file.filename : "avatar.png"
      
          db.query("INSERT INTO users SET ?", {firstName, lastName, email, password, phone, profile_img: img}, (error, results) => {
            if (error) {
                res.send({
                    message: error
                })
            }
            else {
                res.send({
                    message: "Account succesfully registered"
                })
            }
        })
      }
  })
})

app.post("/login", (req, res) => {
  const {email, pass} = req.body

  db.query("SELECT * FROM users WHERE email = ? and password = ?", [email, pass], (err, result) => {
      if (err) {
          res.send({
              message: err
          })
      }
      else if (result.length == 0) {
          res.send({
              message: "Incorrect email or password"
          })
      }
      else {
          res.json({user: result[0]})
      }
  })
})

app.post("/confirmBooking", (req, res) => {
    const {email, phone, date, time, origin, destination} = req.body

    db.query("INSERT INTO bookings SET ?", {email, phone, date, time, origin, destination}, (error, results) => {
        if (error) {
            res.send({
                message: error
            })
        }
        else {
            sendEmail(process.env.email, process.env.email, "Booking", `A booking has just been placed.`)
            sendEmail(process.env.email, email, "Booking", `Hello traveler. Thank you for trusting our service. A driver will come to pick you up at that specific time.`)
            res.send({
                message: "Booking confirmed. Thank you."
            })
        }
    })
})

app.post("/getAllBookings", (req, res) => {
    db.query("SELECT * FROM bookings", (err, result) => {
        if (err) console.log(err)
        else {
            res.send({
                bookings: result
            })
        }
    })
})

app.post("/contact", (req, res) => {
    const {email, subject, message} = req.body

    sendEmail(email, process.env.email, subject, message)
    res.send({
        message: "Thank you!"
    })
})

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});