const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://alex:alexalex@cluster0.n8ojosa.mongodb.net/')
.then(()=>{console.log(`Db is connected`)})
.catch(err =>console.log(err))