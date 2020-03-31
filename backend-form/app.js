const express = require('express');
const path =  require('path');  
const fs =  require('fs'); 
const app = express();
const bodyParser = require('body-parser');
const port = 80;
//EXPRESS RELATED COMMENTS
//app.use(bodyParser.urlencoded({extended : true}));
app.use("/static",express.static("static")); //serving static files
app.use(express.urlencoded());
//app.use(bodyParser.json());


//PUG RELATED COMMENTS
app.set('view engine','pug');  // set the template engine
app.set('views',path.join(__dirname , 'views')); //set the view directory

//END POINT
app.get('/',(req,res)=>{
    const h =  { 'title' : 'angel-gym'};
res.render('index.pug',h);
});
app.get('/contact',(req,res)=>{
    const h =  { 'title' : 'angel-gym'};
res.render('contact.pug');
});
app.get('/about',(req,res)=>{
    const h =  { 'title' : 'angel-gym'};
res.render('about.pug');
});
app.get('/services',(req,res)=>{
    const h =  { 'title' : 'angel-gym'};
res.render('services.pug');
});
app.post('/',(req,res)=>{
    const bro = req.body;
fs.writeFileSync('output.txt',`name ${bro.name},age ${bro.age} gender ${bro.gender} with phone number${bro.phone}, email is ${bro.email} and address is ${bro.address}`);
//const p = {'message' :'your form is submitted'};
console.log(bro);
res.status(200).render('index.pug');
});
//START THE SERVER
app.listen(port,()=>{
console.log(`the app sucessfully started ${port}`);
});