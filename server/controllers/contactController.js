
import { sendContactEmail } from '../emailService.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all fields.',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    // Validate field lengths
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      subject.trim().length > 150 ||
      message.trim().length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data or field length.',
      });
    }

    // Send email
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to send your message. Please try again later.',
    });
  }
};
