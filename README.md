# Express Server with Nodemailer Integration

This is a simple Express server that integrates Nodemailer to send emails.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SahilMindbowser/express-nodemailer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-nodemailer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm run serve
   ```

2. The server will be running on port 8000 by default.

3. In `services/emailService.ts` replace `user` and `pass` with your [ethereal](https://ethereal.email) credentials

## Routes

- `/api/send-email` (POST): Send an email. Requires JSON payload with `to`, `subject`, and `text` fields.

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [nodemailer](https://www.npmjs.com/package/nodemailer): Send e-mails with Node.js – easy as cake!
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript.
- [@types/express](https://www.npmjs.com/package/@types/express): TypeScript definitions for Express.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.
- [nodemon](https://nodemon.io/): Utility that monitors for changes in your source code and automatically restarts your server during development.
