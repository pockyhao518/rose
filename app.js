const express = require("express");
const app = express();
mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const datas = require("./routes/api/datas");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/datas", datas);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
