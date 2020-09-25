const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const user = require("./Routes/Api/user");
const app = express();

// Bodyparser middleware
app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./Config/.key").mongoURI;

// Connect to MongoDB
mongoose.connect( db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log("MongoDB successfully connected 🧉"))
.catch(err => console.log(err));

app.use("/api", user);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port http://localhost:${port} 🔥`));