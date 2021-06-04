const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config');


// Import routes
const postsRoutes = require('./routes/posts')


//Middlewares
app.use('/posts', postsRoutes);
app.use('/specifics', postsRoutes);   

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on Home');
});



//Connect to Database
mongoose.connect(
process.env.DB_CONNECTION, 
{ useUnifiedTopology: true },
() => {
    console.log('You are connected to DB!')
})

app.listen(3005); 