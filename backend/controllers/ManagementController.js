var  ManagementController= {};
const moment = require('moment');
const ControllerUtility = require('./ControllerUtility');

ManagementController.insert = function(req, res){
	console.log('In insert');
	var event = req.body;
	if (event.is_public) {
		event.is_public = 1
	} else {
		event.is_public = 0
	}
	event.date_time = moment(event.date_time).format('YYYY-MM-DD HH:mm:ss')
	var con = ControllerUtility.createConnection();
	con.connect(function (err) {
		if (err) throw err;
		var sql = "INSERT INTO events (title, description, location, date_time,is_public, is_over, duration, price, max_attending, poster) VALUES ('" + ControllerUtility.escapeChar(event.title) + "','" + ControllerUtility.escapeChar(event.description) + "','" + ControllerUtility.escapeChar(event.location) + "','" +
			event.date_time + "'," + event.is_public + "," + event.is_over + "," + event.duration + "," + event.price + "," + event.max_attending + ",'" + event.poster + "')";

		con.query(sql, function (err, result) {
			con.end();
			if (err) throw err;
			console.log("Record Inserted!!");
			res.send({insert: true})
		});
	});
}



module.exports = ManagementController;