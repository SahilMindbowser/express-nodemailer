import express, { Express } from "express";
const app: Express = express();

import { config } from "dotenv";

import { emailRoutes } from "../routes/emailRoutes";

const PORT = process.env.PORT || 8000;

config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/email", emailRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
