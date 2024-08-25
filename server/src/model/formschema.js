const mongoose = require("mongoose");


const formSchema = new mongoose.Schema({  
      
    name:{
        type:String,
        required: [true, "Name is require."],
        trim: true
    },
    lastname:{
        type:String,
        require:[true, "Lastname is require"],
        trim:true
    },
    email:{
        type:String,
        require:[true, "Email is require."],
        unique: [true, "Email is already present  plz try another email id"], 
    },
    phone:{
        type: Number,
        require:true,
        minLength: [10, "no should have minimum 10 digits"],
        maxLength: [10, "no should have maximum 10 digits"],
        match: [/\d{10}/, "no should only have digits"]
    },
    address:{
        type:String,
        require:true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }  
},
{
        auto:true
    })

const Formdata = new mongoose.model("Formadata", formSchema)

module.exports = Formdata;