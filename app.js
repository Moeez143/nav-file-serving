const express = require('express');
const app = express(); 
const port = 3000;
const path = require('path');

// app.use('/static', express.static('static'))

app.get('/', (req , res)=>{
    res.sendFile(path.join(__dirname,'./home.html'));
    // res.send("This is App Home using Express on App.js")
})
app.get('/about', (req , res)=>{
    res.sendFile(path.join(__dirname,'./about.html'));
    // res.send("This is App about using Express on App.js")
})
app.get('/content', (req , res)=>{
    res.sendFile(path.join(__dirname,'./content.html'));
    // res.send("This is App about using Express on App.js")
})
app.get('/index2', (req , res)=>{
    res.sendFile(path.join(__dirname,'./index2.html'));
    // res.send("This is App about using Express on App.js")
})

app.listen(port ,()=>{
    console.log(`App is Now Listening on port http://localhost:${port}`)
})
