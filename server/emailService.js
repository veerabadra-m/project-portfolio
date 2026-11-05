
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
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: 'Portfolio Contact',
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email: process.env.RECEIVER_EMAIL,
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject: `Portfolio Enquiry: ${subject}`,
      textContent: `
New Portfolio Enquiry

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Brevo API error:', data);

    throw new Error(
      data.message || 'Brevo could not send the email.'
    );
  }

  console.log('Email sent successfully:', data.messageId);

  return data;
};
