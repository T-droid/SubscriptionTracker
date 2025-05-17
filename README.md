# SubscriptionTracker

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green?logo=mongodb)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-8.x-red?logo=mongoose)](https://mongoosejs.com/)
[![Upstash](https://img.shields.io/badge/Upstash-Workflow-blue?logo=upstash)](https://console.upstash.com/workflow?teamid=0&tab=details)
[![Arcjet](https://img.shields.io/badge/Arcjet-Node.js-blueviolet?logo=arcjet)](https://docs.arcjet.com/reference/nodejs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple web application to track your subscriptions, manage renewal dates, and avoid unwanted charges.

---

## Features

- Add, edit, and delete subscriptions
- Track renewal dates and costs
- Get reminders for upcoming renewals
- User-friendly dashboard

## Technologies Used

- Node.js 18+
- Express 4.x
- MongoDB 6.x
- Mongoose 8.x
- bcryptjs
- jsonwebtoken
- nodemailer
- dayjs
- dotenv
- cookie-parser
- Morgan (logging)
- [Upstash Workflow](https://console.upstash.com/workflow?teamid=0&tab=details) (serverless workflows, queues, and scheduling)
- [Arcjet Node.js SDK](https://docs.arcjet.com/reference/nodejs) (security and rate limiting)
- @arcjet/node
- @upstash/workflow

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (Node package manager)
- (Optional) [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/SubscriptionTracker.git
    cd SubscriptionTracker
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env`
    - Update the values in `.env` as needed (e.g., MongoDB URI, JWT secret)

4. **Run database migrations (if any):**
    ```bash
    npm run migrate
    ```

5. **Seed the database (optional, for initial data):**
    ```bash
    npm run seed
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) in your browser.

---

## Usage

- Register for a new account or log in.
- Add your subscriptions with details like name, cost, and renewal date.
- View and manage all your subscriptions from the dashboard.
- Edit or delete subscriptions as needed.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

