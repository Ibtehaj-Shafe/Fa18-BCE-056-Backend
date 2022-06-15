import mongoose from 'mongoose';

const contactstructure= mongoose.Schema({
    name: String,
    num: String,
    email:String,

});

const contactmodel=mongoose.model('contact',contactstructure);

export default contactmodel;