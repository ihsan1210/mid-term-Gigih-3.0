require('dotenv').config();

const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
var cors = require('cors')

app.use(cors());

const port = process.env.PORT || 8080;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error)=>{
  console.log(error);
})

database.once('connected',()=>{
  console.log('Database Connected');
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const videoRouter = require('./routes/videoRouter');
app.use('/video',videoRouter)

const commentRouter = require('./routes/commentRouter');
app.use('/comment', commentRouter);

app.get("/",(req,res)=>{
  res.send('hi');
})

app.listen(port,"0.0.0.0",()=>{
  console.log (`server started at port ${3000}`);
})

