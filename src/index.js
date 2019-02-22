const path = require('path');
const exphbs = require('express-handlebars');

const morgan = require('morgan');
const express = require('express');
const app = express();

// database
require('./database');


//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  //helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));

//routes
app.use('/', indexRoutes);

// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
