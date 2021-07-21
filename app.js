const express = require('express');
const app = express();
const connectDB = require('../achapet-server/mongoDB/bd');

const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

// var usersRouter = require('./routes/users');

require('../achapet-server/routes/users')(app);
require("dotenv-safe").config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/users', usersRouter);

connectDB();
server = app.listen(3003, () => {
  console.log('Servidor online!')   
})

module.exports = app;

