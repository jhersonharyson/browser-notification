const express = require('express');

const app = express();


app.use('/', express.static(__dirname+'/public/'));

app.listen(8000, ()=>{
    console.log('ouvindo na porta 8000')
})