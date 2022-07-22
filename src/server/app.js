const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require('cors');
const sellerRouter = require('./routes/sellerRouter');

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Hello From 2nd Middleware!');
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// 3) ROUTES

// app.use('/api/v1/categories', categoryRouter);
// app.use('/api/v1/menus', menuRouter);
// app.use('/api/v1/dishes', dishRouter);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/makers', makerRouter);
// app.use('/api/v1/orders', orderRouter);
// app.use('/api/v1/verifies', verifyRouter);

app.use('/api/v1/sellers', sellerRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);

module.exports = app;
