const express = require("express")
const app = express()

require("./src/conn/conn")
const forrmdata = require('./src/model/formschema')
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
Port = process.env.PORT || 5000;

const cors = require('cors')

const corOptions = {
    origin: 'http://localhost:5173',
    methods:" GET, POST, PUT, PATCH, DELETE",
    Credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors(corOptions))
app.get("/contactus",async(req,res)=>{
try {
   const getformdata = await forrmdata.find();
   res.status(200).send(getformdata)
} catch (error) {
    console.log(error)
}
})


app.post("/contactus",async(req,res)=>{
    try {
        const insertdata = new forrmdata(req.body)
        const result = await insertdata.save();
        console.log(result,"czxvc")
        res.status(201).send(result)
       
    } catch (error) {
        console.log(error, "sfsgh") 
    }
    })

app.listen(Port, ()=>{
    console.log(`you are connect to server port on ${Port}`)
});
