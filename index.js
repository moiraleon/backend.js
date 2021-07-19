const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json()) 

const myFriends = ['Chris','Tom','Tony','Scarlett']

app.get('/api/users', function(req,res){
    res.status(200).send(myFriends) 
} )
// const temperature = ['45','70','80','90']

app.get('/weather/:temperature',function (req,res){
    const {temperature} = req.params
    const phrase = `<h3>It was ${temperature} today</h3>`
    console.log(temperature)
    res.status(200).send(phrase)
})


app.listen(4000,function(){
    console.log('Server running on 4000')
})