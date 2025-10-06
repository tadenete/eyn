import { promises } from "nodemailer/lib/xoauth2";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({
        message: "Unprocessable request, please provide the required fields",
      });
    }

    //proceed with sending email.
    try {
        const mailData = {
          from: email,
          to: process.env.support_email,
          subject: `Message from ${name}`,
          text: message,
          html: `<div>${message}</div>`,
        };
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransporter({
          port: 587,
          host: process.env.smtp_host,
          auth: {
            user: process.env.smtp_user,
            pass: process.env.smtp_pass,
          },
        });

        await new Promise((resolve, reject) => {
          //verify connection configuration.
          transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              resolve(success);
            }
          });
        });
        await new Promise((resolve, reject) => {
          //send email.
          transporter.sendMail(mailData, function (err, info) {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });

      return res.status(200).json({ message: "Successfully sent message!" });
    } catch (error) {
      return res.status(422).json({ message: "Something went wrong!" });
    }
  }
}
