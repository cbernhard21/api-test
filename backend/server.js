const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ejffl', require('./routes/leagueRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`);
});