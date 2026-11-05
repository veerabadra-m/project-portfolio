
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: `Portfolio Enquiry: ${subject}`,
    text: `
New Portfolio Enquiry

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log('Email sent successfully:', info.messageId);

  return info;
};
