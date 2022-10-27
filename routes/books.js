const express=require('express');
const router=express.Router();
const Book=require('../models/Books');
//POST Route
router.post('/',(req,res)=>{
    book=new Book({
        name:req.body.Bookname,
        author:{
            name:req.body.Authorname,
            age:req.body.Authorage,

        },
        genre:req.body.genre
    })
    book.save().then(book=>{res.send(book)}).catch(error=>{res.status(500).send("Book was not created in DB")});
});
module.exports=router;