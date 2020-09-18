const dotenv = require('dotenv');
const mongoose = require('mongoose');

// //uncaught exception
// process.on('uncaughtException', (err) => {
//   console.log('Uncaught exception 💥, shutting down');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

dotenv.config({ path: './config.env' });

const app = require('./app');

//connect mongodb
mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('mongoose connected'));

//start server
const PORT = process.env.PORT || 3000;
const server = app.listen(
  PORT,
  console.log(`abusayeed.me started at port: ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
