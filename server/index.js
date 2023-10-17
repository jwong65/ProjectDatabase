const express = require('express')
const app = express()

app.use('/', (req, res)=>{
    res.send("Server is finally running");
})

app.listen(5000, console.log("Server started on PORT"))
