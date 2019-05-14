var  HomeController= {};
const ControllerUtility = require('./ControllerUtility');





/**
 * This function search values based on the filter string
 * @param req
 * @param res
 * @param next
 */
HomeController.search= function(req, res, next){
    let filterValue = req.query.event;
    console.log("****EVENT" + filterValue);
    const con = ControllerUtility.createConnection();
    con.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM events WHERE title LIKE '%" + filterValue + "%' OR description LIKE '%" + filterValue +"%'"
            + " OR location LIKE '%" + filterValue +"%'";

        con.query(sql, function (err, result) {
            if (err) throw err;
            res.searchResult = result;
            res.filterValue = filterValue;
            con.end();
            res.send(result);
            //res.redirect('/event');

        });
    });

}

module.exports = HomeController;