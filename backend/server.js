const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const partRouter = require('./routes/partRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("It's working!")
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/parts', partRouter);

app.listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port}/ címen!`);
});