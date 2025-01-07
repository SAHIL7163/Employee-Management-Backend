const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const emplyeeSchema = new Schema({
    id:{
        type : Number ,
        required : true 
    },
    name :{
        type : String ,
        required : true 
    },
    department : {
        type : String ,
        required : true 
    },
    address : {
        type : String ,
        required : true 
    }
})

module.exports = mongoose.model('Employees' , emplyeeSchema) ;