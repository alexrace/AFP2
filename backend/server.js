const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/userRouter');
var productRouter = require('./routes/productRouter');
var partRouter = require('./routes/partRouter');

var app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/parts', partRouter);

app.listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port}/ címen!`);
});