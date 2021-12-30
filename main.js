require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controller/usercontroller');

const app = express();


app.listen(process.env.PORT_NUMBER, function(){
    console.log('User server init');
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('DB connected');
        app.use(express.json());

        app.post('/user',controller.addUser);
        app.get('/users',controller.getUsers);

    })
    .catch(function(err){
        console.log(err.message);
    })

})