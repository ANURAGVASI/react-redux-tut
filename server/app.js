const path= require('path');
const express = require('express');
const app = express();
const staticPublicPath = path.join('__dirname','..','public');
const port = process.env.PORT || 3000;

app.use(express.static(staticPublicPath));

app.use('*',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public/index.html'));
})

app.listen(port,() => {
    console.log('server running: localhost:3000')
})