const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const indexRouter = require("./routes/index.routes")



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', userRouter);
app.use("/", indexRouter);
app.use("/uploads", express.static("uploads"));


app.get('/', (req, res) => {
    res.send('Welcome to the Home Page! <br> <a href="/register">Register</a> or <a href="/login">Login</a>');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});