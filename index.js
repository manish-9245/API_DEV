const express=require('express');
const mongoose=require('mongoose');
const app=express();
const booksRoute=require('./routes/books');
require('dotenv').config();
const PORT=process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/books',booksRoute);
//connect to MongoDB
mongoose.connect(process.env.MONGO_URL ,{useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB");}).catch(error=>{console.log('Something went wrong,could not connect to Mongo DB',error);});
//Start Server
app.listen(PORT,()=>{console.log("Server is running on port ",PORT)});