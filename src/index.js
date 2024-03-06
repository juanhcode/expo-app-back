const express = require('express');
const app = express();
const db = require('./database/connection');
const authRouter = require('./routes/v1/auth.routes');
require('dotenv').config();

db.connectDb();
app.use(express.json());
app.use('/v1',authRouter);

app.listen(process.env.PORT || 3030, ()=>{
    console.log("Server running in port" + process.env.PORT);
})
