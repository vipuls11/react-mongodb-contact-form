const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/form")
.then(()=>{
    console.log("Connection successfully")
}).catch(
    (err)=>{
        console.log(`Connection ${err}`)
    }
)