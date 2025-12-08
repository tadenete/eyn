const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, topic, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !topic ||
      topic.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({
        message: "Unprocessable request, please provide the required fields",
      });
    }

    try {
        const smtpUser = process.env.SMTP_USER || process.env.smtp_user;
        const smtpPass = process.env.SMTP_PASS || process.env.smtp_pass;
        const supportEmail = process.env.SUPPORT_EMAIL || process.env.support_email;

        if (!smtpUser || !smtpPass || !supportEmail) {
          if (process.env.NODE_ENV === 'development') {
            console.error("Missing environment variables");
          }
          return res.status(500).json({ 
            message: "Server configuration error. Please contact administrator." 
          });
        }

        const subject = topic 
          ? `Message from ${name} - ${topic}`
          : `Message from ${name}`;
        
        const mailData = {
          from: smtpUser, // Use Gmail account as sender
          replyTo: email, // Use form submitter's email for replies
          to: supportEmail,
          subject: subject,
          text: `Topic: ${topic}\n\nFrom: ${name} (${email})\n\n${message}`,
          html: `<div><p><strong>Topic:</strong> ${topic}</p><p><strong>From:</strong> ${name} (${email})</p><div>${message.replace(/\n/g, '<br>')}</div></div>`,
        };
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          }
        });

        await new Promise((resolve, reject) => {
          transporter.verify(function (error, success) {
            if (error) {
              reject(error);
            } else {
              resolve(success);
            }
          });
        });
        
        await new Promise((resolve, reject) => {
          transporter.sendMail(mailData, function (err, info) {
            if (err) {
              reject(err);
            } else {
              resolve(info);
            }
          });
        });

      return res.status(200).json({ message: "Successfully sent message!" });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Email sending error:", error);
      }
      const errorMessage = error.message || "Failed to send email. Please check the server configuration.";
      return res.status(422).json({ 
        message: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
}
