const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./models');
//const userRoutes = require('./views/users'); //cant find module
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pgPromise = require('pg');
const sequelize = require('sequelize');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'views'); //look in views for related templates

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'rottweiler secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 15811200000,
    },
}));


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/users', (req, res) => {
    res.render('users.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        db.User.create({
            name,
            email,
            password: hash,
        })
            .then((result) => {
                res.redirect('/login')
            });
    });
});

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    db.User.findOne({
        where: { name }
    }).then((User) => {
        bcrypt.compare(password, User.password, (err, match) => {
            if (match) {
                res.send("Logged In!")
            } else {
                res.send("Incorrect Password")
            }
        });
    })
        .catch(() => {
            res.send('User Not Found!')
        });
});


// app.post('/artist', (req, res, next) => {
//     db.Artist.create({
//         name: req.body.name,
//     }).then((result) => {
//         res.json(result);
//     });
// });

// app.post('/artist/:artist_id/album', (req, res) => {
//     db.
// })




app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));