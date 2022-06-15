import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import con from "./router/contact.js";

const app=express();
const url="mongodb+srv://ibtehaj:smis12345@contacts.mz67uz2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Connected to DB"));

app.listen(5000);
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/contacts',con);
app.use('/',con);