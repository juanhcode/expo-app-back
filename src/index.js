const express = require('express');
const app = express();
const db = require('./database/connection');
require('dotenv').config();

db.connectDb();
app.use(express.json());

app.listen(process.env.PORT || 3030, ()=>{
    console.log("Server running in port" + process.env.PORT);
})
