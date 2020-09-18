const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

const app = express();

//link to routes
const indexRoutes = require('./routes/indexRoutes');

//enable trust proxy
app.enable('trust-proxy');

//cors
app.use(cors());
app.options('*', cors());

//view setup
app.set('view engine', 'ejs');

//public
app.use(express.static(path.join(__dirname, 'public')));

//helmet
app.use(helmet());

//rate limit
app.use(
  '*',
  rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request. Please try again after 1 hour',
  })
);

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//mongoDB sanitization against NOSQL injection
app.use(mongoSanitize());

//data sanitize against xss
app.use(xss());

//prevent parameter pollution
app.use(hpp());

//compressing data
app.use(compression());

/*routes
//all 
//links
*/
app.use('/', indexRoutes);

//export app

module.exports = app;
