const express = require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
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

app.enable('trust-proxy');

//cors
app.use(cors());
app.options('*', cors());

//view setup
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', 'layout');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//helmet
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/admin', limiter);

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ['test'],
  })
);

//compression
app.use(compression());

/*routes
//all 
//links
*/
app.use('/', indexRoutes);

//export app

module.exports = app;
