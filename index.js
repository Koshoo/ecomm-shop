const express = require('express');
const bodyParser = require('body-parser');
const coockieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  coockieSession({
    keys: ['dfgsdfgkl34234sadflkxzcv']
  })
);

app.use(authRouter);
app.use(adminProductRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});
