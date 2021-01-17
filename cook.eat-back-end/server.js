const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const mongoose = require('mongoose') 
require('dotenv').config()
const recipes = require('./routes/recipes')
const users = require('./routes/users')
// const varifiedUser = require()
// const auth = require()
const port = 5000;

// connect to mongoDb with mongoose
const dbUrl = process.env.DATABASE_URL
mongoose.connect(dbUrl, { 
    useNewUrlParser : true,  
    useUnifiedTopology: true}
    , function(error) { 
        if (error) { 
            console.log("Error!" + error); 
        } else {
            console.log('Connencted to db')
}});
 
app.use(cors())
app.use('/recipes', recipes)
app.use('/users', users)
// app.use('/auth', auth)
// app.use('/varifiedUser', varifiedUser)

app.get('/', (req,res) =>{
    res.send('Cook.Eat')
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});