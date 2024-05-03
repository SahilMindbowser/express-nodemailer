import { Request, Response } from "express";
import { sendEmail } from "../services/emailService";

/**
 * Controller to send an email
 * @param req Request object
 * @param res Response object
 */
const sendEmailController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { to, subject, text } = req.body;

  try {
    await sendEmail({ to, subject, text });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export { sendEmailController };
