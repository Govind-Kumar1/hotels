const mongoose = require('mongoose');

//Defining the person schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    age:{
        type: Number,
         
    },
    work:{
        type: String,
        enum:['student','mmm'],
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    
     
    address:{
        type: String,
        required: true
    },
    

});

// Create Person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;