const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('', '');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded)






app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));