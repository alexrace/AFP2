const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/userRouter');
var productRouter = require('./routes/productRouter');
var partRouter = require('./routes/partRouter');
var inventoryRouter = require('./routes/inventoryRouter');

var app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/parts', partRouter);
app.use('/inventory', inventoryRouter);

app.listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port}/ címen!`);
});