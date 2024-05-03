import nodemailer, { Transporter } from "nodemailer";

interface EmailParams {
  to: string;
  subject: string;
  text: string;
}

/**
 * Function to send an email
 * @param to Email recipient
 * @param subject Email subject
 * @param text Email body
 */
const sendEmail = async ({ to, subject, text }: EmailParams): Promise<void> => {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        // user: "Your Ethereal Email Address (https://ethereal.email)",
        // pass: "Your Ethereal Password",
      },
    });

    await transporter.sendMail({
      from: "Sahil Punjabi <sahilpanjabi@gmail.com>",
      to,
      subject,
      text,
    });
  } catch (error) {
    throw new Error("Error sending email");
  }
};

export { sendEmail };
