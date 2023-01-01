const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// - Settings
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
})
