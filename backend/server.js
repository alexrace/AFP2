const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const partRouter = require('./routes/partRouter');
const inventoryRouter = require('./routes/inventoryRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/parts', partRouter);
app.use('/api/inventory', inventoryRouter);

app.listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port}/ címen!`);
});