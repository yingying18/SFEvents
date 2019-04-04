var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
const moment = require('moment')

var handlebars = require('express3-handlebars')
    .create({ defaultLayout:'main' });

app.set('port', process.env.PORT || 3000);
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
app.use(bodyParser.json());
app.listen(app.get('port'), function () {

  console.log("Express started on http://localhost:"+app.get('port'));
});

/*
 This function creates a connection to team2 database with admin user
 */
function createConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
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
app.get('/',(req,res)=>{
    res.send(__dirname+'/public/index.html')
})

/**
 * Endpoint for search function
 */
app.get('/search', function (req, res) {
  res.render('search');
});

/**
 * Endpoint for insert function
 */
app.get('/insert', function(req, res){
  res.render('insert');
});


/**
 * service to search events
 */
app.get('/api/search', search, (req, res) =>{
  res.send(res.searchResult);
  // console.log("search Result Length" + res.searchResult.length);
  // res.render('search',{
  //   searchResult : res.searchResult,
  //   filterValue : res.filterValue
  // });
});


/**
 * service to insert events
 */
app.post('/api/insert', function(req, res, next){

  var event = req.body;
  if(event.isPublic){
    event.isPublic = 1
  }else{
    event.isPublic = 0
  }
  event.dateTime = moment(event.dateTime).format('YYYY-MM-DD HH:mm:ss')
  var con = createConnection();
  con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO EVENT (TITLE, DESCRIPTION, LOCATION, EVENT_DATETIME,DURATION, PRICE,IS_PUBLIC, MAX_ATTENDING) VALUES ('"+ event.eventTitle+"','"+ event.description+"','"+ event.location+"','"+
        event.dateTime+"',"+ event.duration+","+ event.price+",'"+ event.isPublic +"',"+event.maxAttending+")";

    con.query(sql, function (err, result) {
      con.end();
      if (err) throw err;
      console.log("Record Inserted!!");
      next();
    });
  });
  res.render('insert');

});

