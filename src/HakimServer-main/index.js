const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
 
 app.use("/api", router);

const PORT = process.env.PORT || 8080;

async function startServer() {
    const chalk = await import('chalk');

    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(chalk.default.green('Connected to DB'));
            console.log(chalk.default.blue(`Server is running on port ${PORT}`));
        });
    }).catch(err => {
        console.error(chalk.default.red('Failed to connect to DB:', err));
    });
}

startServer();
