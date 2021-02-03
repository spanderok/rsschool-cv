import * as express from 'express';
import createError from 'http-errors';

const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

app.use((_req, res, next) => {
  res.set('Access-Control-Allow-Headers', '*');
  next();
});
app.use((_req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.urlencoded({ extended: true }));

// Initialize DB
require('./initDB')();


import ProductRoute from './Routes/Product.route';
app.use('/products', ProductRoute);

//404 handler and pass to error handler
app.use((_req, _res, next) => {
  /*
  const err = new Error('Not found');
  err.status = 404;
  next(err);
  */
  // You can use the above code if your not using the http-errors module
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err: { status: any; message: any; }, req: any, res: { status: (arg0: any) => void; send: (arg0: { error: { status: any; message: any; }; }) => void; }, next: any) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
