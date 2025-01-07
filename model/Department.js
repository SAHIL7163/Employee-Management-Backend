const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const departmentSchema = new Schema({
    id:{
        type : Number ,
        required : true 
    },
    name :{
        type : String ,
        required : true 
    },
    description : {
        type : String ,
        required : true 
    }
})

module.exports = mongoose.model('Departments' , departmentSchema) ;