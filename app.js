const bodyParser = require('body-parser');
const app=require('express');
const port =80
app.use(bodyParser.json());

app.get('/',()=>{
    app.send('index.html')
})


app.listen(port,()=>{
    console.log('engine is started.');
})