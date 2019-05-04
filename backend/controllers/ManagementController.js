var  ManagementController= {};
const moment = require('moment');
const ControllerUtility = require('./ControllerUtility');

ManagementController.insert = function(req, res){

	var event = req.body;
	console.log('In insert' + event);
	if(event.is_public) {
		event.is_public = true
	} else {
		event.is_public = false
	}
	event.start_time = moment(event.date_time[0]).format('YYYY-MM-DD HH:mm:ss');
	event.end_time = moment(event.date_time[1]).format('YYYY-MM-DD HH:mm:ss');
	event.is_over = true;

	if((new Date(event.date_time[0]).getTime()) > (new Date().getTime())){
		event.is_over = false;
	}

	if(!event.poster){
		event.poster = null;
	}


	console.log("posterpath " + event.poster );
	var con = ControllerUtility.createConnection();
	con.connect(function (err) {
		if (err) throw err;
		var sql = "INSERT INTO events (title, description, location, start_time,end_time, is_public, is_over, price, max_attending, poster) VALUES ('" + ControllerUtility.escapeChar(event.title) + "','" + ControllerUtility.escapeChar(event.description) + "','" + ControllerUtility.escapeChar(event.location) + "','" +
			event.start_time + "','" + event.end_time + "'," + event.is_public + "," + event.is_over + "," + event.price + "," + event.max_attending + ",'" + event.poster + "')";

		con.query(sql, function (err, result) {
			con.end();
			if (err) throw err;
			console.log("Record Inserted!!");
			res.send({insert: true})
		});
	});
},


ManagementController.upload = function(req, res){
	console.log("In posters"+ req.files.file);
	let uploadedFile = req.files.file;
	uploadedFile.mv('images/'+uploadedFile.name, function(err) {
		if (err)
			return res.status(500).send(err);

		res.send('Poster Uploaded!');
	});
}



module.exports = ManagementController;