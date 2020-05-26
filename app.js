const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded)

app.post('/artist', (req, res, next) => {
    db.Artist.create({
        name: req.body.name,
    }).then((result) => {
        res.json(result);
    });
});

app.post('/artist/:artist_id/album', (req, res) => {
    db.
})




app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));