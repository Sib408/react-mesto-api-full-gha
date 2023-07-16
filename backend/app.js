const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes/index');

const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(requestLogger);
mongoose.connect(DB_ADDRESS, {});
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://api.sib408.mesto.nomoredomains.xyz',
  ],
  credentials: true,
}));
app.use(router);
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT);
