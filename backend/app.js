var express = require('express');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

var app = express();
var mysql = require('mysql');
const moment = require('moment')
var handlebars = require('express3-handlebars')
    .create({ defaultLayout:'main' });



app.use(fileUpload());
app.set('port', process.env.PORT || 3000);
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
app.use(bodyParser.json());



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
app.get('/api/search', search, (req, res) =>{
  res.send(res.searchResult);
});


function escapeChar(column) {
  return column.replace("'", "''");
}
