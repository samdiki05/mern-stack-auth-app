import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Debug: Log environment variables
console.log("Environment Variables:", {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_SERVICE: process.env.SMTP_SERVICE,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_MAIL: process.env.SMTP_MAIL,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD ? "***" : "Not Set", // Mask password for security
});

// Create transporter once
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // SMTP server host
  service: process.env.SMTP_SERVICE, // SMTP service (e.g., 'gmail')
  port: process.env.SMTP_PORT, // SMTP port (e.g., 587 or 465)
  secure: process.env.SMTP_PORT === '465', // true for port 465 (SSL), false otherwise
  requireTLS: process.env.SMTP_PORT === '587', // true for port 587 (TLS), false otherwise
  auth: {
    user: process.env.SMTP_MAIL, // SMTP username (email address)
    pass: process.env.SMTP_PASSWORD, // SMTP password or app-specific password
  },
});

// Send email function
export const sendEmail = async ({ email, subject, message }) => {
  const options = {
    from: process.env.SMTP_MAIL, // Sender email address
    to: email, // Recipient email address
    subject, // Email subject
    html: message, // Email content (HTML format)
  };

  try {
    // Log SMTP configuration for debugging
    console.log("SMTP Configuration:", {
      host: process.env.SMTP_HOST,
      service: process.env.SMTP_SERVICE,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465',
      requireTLS: process.env.SMTP_PORT === '587',
    });

    // Send email using the pre-configured transporter
    const info = await transporter.sendMail(options);
    console.log("Email sent successfully:", info.response); // Log success
    return info; // Return the info object for further use
  } catch (error) {
    console.error("Error sending email:"); // Log the error
    console.error("Error Details:", error); // Log the full error object
    if (error.responseCode) {
      console.error("SMTP Error Code:", error.responseCode); // Log SMTP error code
      console.error("SMTP Response:", error.response); // Log SMTP response
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};