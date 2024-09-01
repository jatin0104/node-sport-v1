var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
// let sessionstorage = require('sessionstorage');
app.use(bodyParser.json());      
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({extended: true}));

// Home Page
router.get('/login',(req,res)=>{
    res.status(200).send('Login Page')
})

// Submit Login
// router.post('/login', (req,res)=>{
//     sessionstorage.setItem('username','jatin');
//     // res.redirect('/')
//     res.send(sessionstorage.getItem('username'))
// })

app.use(router);

module.exports = router;