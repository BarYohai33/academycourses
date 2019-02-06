const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const cors = require('cors');
const users = require('./routes/user'); 
const courses = require('./routes/course');
const classes = require('./routes/classe');
const advices = require('./routes/advice');
const payments = require('./routes/payment');





mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Cannot connect to the database'+ err)}
);

const app = express();
app.use(cors());
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("body-parser").text());

app.use('/api/users', users);
app.use('/api', courses);
app.use('/api', classes);
app.use('/api', advices);
app.use('/', payments);

app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});