require("dotenv").config();

const express = require("express");
const { connection } = require("./connection");
const Coffee = require("./models/coffee");
const Book = require("./models/book");
const coffeeRouter = require("./routes/coffee");
const bookRouter = require("./routes/book");

const app = express();

app.use(express.json()); //this allows us to use bodys of json and receive json

app.get("/", (req, res) => {
    res.status(200).json({msg: "Hi"});
});
app.use("/coffee", coffeeRouter);
app.use("/book", bookRouter);

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.authenticate();
    Coffee.sync({alter: true});
    Book.sync({alter: true});
    console.log("Web App online");
});