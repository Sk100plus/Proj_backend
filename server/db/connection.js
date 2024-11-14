const mongoose = require('mongoose');


const url = process.env.mongourl;

mongoose.connect(url)
.then(() => console.log("Connected to db"))
.catch((e) => console.log("Error", e));
