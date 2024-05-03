import express, { Router } from "express";
import { sendEmailController } from "../controllers/emailController";

const router: Router = express.Router();

router.post("/send-email", sendEmailController);

export { router as emailRoutes };
