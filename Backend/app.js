const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');




dotenv.config();
app.use(cors());
connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());





app.get('/', (req,res) =>{
    res.send('hello world');
})


app.use('/users', userRoutes);

module.exports = app;