const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

fruits = []

app.post("/fruitname", function(req,res){
    // console.log(req.query.fruitname)?
    const {fruitname} = req.body
    if(fruitname){
        fruits.push(fruitname);
        console.log(fruits);
        res.send(fruits)
    }
    
})


app.listen(5000, function(){
    console.log("Server Started...")
})

