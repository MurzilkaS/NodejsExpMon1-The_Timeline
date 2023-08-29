const express = require('express');
require('./config/mongoose')
const app = express();

const route = require('./config/route');
console.log(route);
app.use(express. urlencoded({extended: false}))

app.use(express. json())
app.set('view engine', 'ejs')

app.use(route)
let port = 4200
app.listen(port, console.log(`app is on ${port}`))








