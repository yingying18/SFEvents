var express = require('express');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var app = express();
var mysql = require('mysql');
const moment = require('moment');
const session = require('express-session');
const LoginController = require('./controllers/LoginController');
const crypto = require('crypto');
// const routes = require('./routes')(app);
const  hash= (password)=>{
  return crypto.createHmac('sha256', 'csc648-spring2019')
      .update(password)
      .digest('hex');
};
var handlebars = require('express3-handlebars')
    .create({ defaultLayout:'main' });

passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log(username,password)
      console.log(username,password)
      LoginController.getUser(username).then((user)=>{
        console.log(user)
        if(user.password === hash(password)){
            return done(null,user);
        }else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      })
    }
));

app.use(fileUpload());
app.set('port', process.env.PORT || 3000);
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static('../frontend/dist'))
app.use(bodyParser.json());
app.use(session({
  secret:'csc648',
  resave: true,
  saveUninitialized: true,
  cookie:{

    maxAge: 300000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    LoginController.getUser(username).then((user)=>{
      done(null,user)
    }).catch(()=>{
      done(err,null)
    })
});

const IndexRoute = require('./routes/IndexRoute')(app);

app.listen(app.get('port'), function () {

  console.log("Express started on http://localhost:"+app.get('port'));
});

/*
 This function creates a connection to team2 database with admin user
 */
function createConnection() {
  return mysql.createConnection({
    host: "18.222.238.235",
    user: "admin",
    password: "csc648_848_02",
    database: "team2",
    port:3306
  });
}

/**
 * This function search values based on the filter string
 * @param req
 * @param res
 * @param next
 */
function search(req, res, next){
  var filterValue = req.query.search;
  console.log("Filter String " +filterValue);
  var con = createConnection();
  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT TITLE, DESCRIPTION, LOCATION, EVENT_DATETIME,DURATION, PRICE, IS_PUBLIC, MAX_ATTENDING FROM EVENT WHERE TITLE LIKE '%" + filterValue + "%' OR DESCRIPTION LIKE '%" + filterValue +"%'"
        + " OR LOCATION LIKE '%" + filterValue +"%'";

    con.query(sql, function (err, result) {
      con.end();
      if (err) throw err;
      res.searchResult = result;
      res.filterValue = filterValue;
      next();

    });
  });

}

/**
 * service to search events
 */
app.get('/profile',(req,res)=>{
  res.send(req.user);
})
app.get('/api/search', search, (req, res) =>{
  res.send(res.searchResult);
});
app.get('/loggedin',(req,res)=>{
  if(req.user.isAdmin){
    res.redirect('/admin')
  }else {
    res.redirect('/management')
  }
})
app.use(function(req,res,next)
{

  var err = new Error('Not Found');
  err.status = 404;
  res.send('page not found')
  // res.sendFile(path.join(__dirname+'/public/404.html'))

})
//hanlde server err 500
app.use(function(err){
  res.status(err.status || 500)
      .send({message: err.message})
});

function escapeChar(column) {
  return column.replace("'", "''");
}
