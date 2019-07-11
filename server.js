const express = require('express');
//require('./models/db');
const userController = require('./controllers/userController');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public/'));
app.set('views',path.join(__dirname,'/views'));
app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'mainLayout', layoutsDir:__dirname+'/views/layout/'}));
app.set('view engine','hbs');
app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
});
app.use('/user',userController); 