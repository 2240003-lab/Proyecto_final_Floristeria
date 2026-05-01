const port = 'process.env.port' || '3301'
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const express = require('express');

app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    partialsDir: path.join(__dirname, 'view/partials'),
    layoutsDir: path.join(__dirname, 'view/partials'),
    defaultLayout: 'home.hbs'
}));


//procces.env.variable