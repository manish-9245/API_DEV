const mongoose=require('mongoose');
//Author Schema Inheritence
const AuthorSchema= new mongoose.Schema({
    name:{type:String,
        required:true,
        minlength:3,
        maxlength:40},
    age:{type:Number,
        required:true,
        min:10,
        max:100}
})
module.exports=mongoose.model('Author',AuthorSchema);