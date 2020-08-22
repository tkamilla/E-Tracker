const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/.env' });

connectDB();

const anime = require('./routes/anime');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/anime', anime);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));