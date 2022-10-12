
import BookController from './controllers/bookController.js';
import UserController from './controllers/userController.js';

import express from 'express';

const app = express();

app.use('/books', BookController  );

app.use('/users', UserController  );

// handle errors, log diagnostic, give user simple error message
app.use(function (err, req, res, next) {
  console.error( err );
  res.status(500).send('System unable to process request, please try later.')
})

app.listen(3000, () => console.log('\nBookish listening on port 3000'));

