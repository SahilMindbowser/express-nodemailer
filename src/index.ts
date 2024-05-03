import express, { Express, Request, Response } from "express";
const app: Express = express();

const PORT = process.env.PORT || 8000;

app.get("/", (_, res: Response) => {
  res.send("Hello World!!!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
