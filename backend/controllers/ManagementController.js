var  ManagementController= {};
const moment = require('moment');
const Promise = require('promise');
const ControllerUtility = require('./ControllerUtility');
const nodemailer = require("nodemailer");


/**
 * Inserts newly created event
 */
ManagementController.insert = function(req, res){
	var event = req.body;
	setEventParameters(event);
	var con = ControllerUtility.createConnection();
	con.connect(function (err) {
			if (err) throw err;
			const sql = "INSERT INTO events (title, description, location, start_time,end_time, is_public, is_over, price, max_attending, poster, invitations, isBlocked, isReported) VALUES " +
			"(?,?,?,?,?,?,?,?,?,?,?,?,?)";

				const valuesToInsert = [ControllerUtility.escapeChar(event.title), ControllerUtility.escapeChar(event.description), ControllerUtility.escapeChar(event.location),
				event.start_time, event.end_time, event.is_public,event.is_over, event.price, event.max_attending, event.poster, event.invitations,false,false];
				con.query(sql,valuesToInsert, function (err, result) {
				if (err) throw err;
				con.end();
				console.log("Record Inserted!!");
				res.send({insert: true});
				var hostName = 'user1'; //TODO logged in user integration is pending
				insertEventHost(hostName);
			});

		});
	},

	/**
	 * Update event based on eid
	 */
	ManagementController.updateEvent = function(req, res){
		var event = req.body;
		setEventParameters(event);
		var con = ControllerUtility.createConnection();
		con.connect(function (err) {
			if (err) throw err;

			var sql ="UPDATE events SET title = ?, description = ?, location = ?, start_time = ?,end_time = ?," +
				" is_public =?, is_over = ?, price = ?, max_attending = ?, poster = ?, invitations = ? WHERE eid = ?";
			con.query(sql,[event.title, event.description, event.location, event.start_time, event.end_time, event.is_public,
				event.is_over,event.price, event.max_attending, event.poster, event.invitations, event.eid], function (err, result) {
				if (err) throw err;
				con.end();
				console.log("Record Updated!!");
				res.send({insert: true});
			});

		});
	},


	/**
	 * Insert entry in Event-Host table
	 */
	insertEventHost = function(hostName){
		var con = ControllerUtility.createConnection();
		var eventId = 1;
		con.connect(function (err) {
			if (err) throw err;

			var sql = "SELECT max(eid) FROM events";
			con.query(sql, function (err, result) {
				if (err) throw err;
				eventId = result[0]['max(eid)'];
				con.end();
			});
		});

		var userId;
		var promise = new Promise((resolve, reject) => {
			var con1 = ControllerUtility.createConnection();
			con1.connect(function (err) {
				if (err) throw err;
				var sql = " select user_id from registered where username = ?";
				con1.query(sql,[hostName], function (err, result) {
					if (err) throw err;
					userId = result[0]['user_id'];
					con1.end();
					resolve();
				});
			});
		}).then(function () {
			var con2 = ControllerUtility.createConnection();
			con2.connect(function (err) {
				if (err) throw err;
				var sql = "insert into event_host values(?, ?, ?, ?);";
				con2.query(sql,[eventId , userId,false,false], function (err, result) {
					if (err) throw err;
					con2.end();
				});
			});

		});

	}

	ManagementController.selectEventsByUser = function(req, res){
		const con = ControllerUtility.createConnection();
		const hostId = req.query.user_id;
		con.connect(function (err) {
			if (err) throw err;
			var sql = "select events.eid,events.title from events, event_host  where event_host.event_id = events.eid AND event_host.host_id = ?";
			con.query(sql,[hostId], function (err, result) {
				if (err) throw err;
				con.end();
				res.send(result);
			});
			}
		)}


	/**
	 * Fetch event based on event id
	 * @param req
	 * @param res
	 */
	ManagementController.fetchEvent = function(req, res){
		var con = ControllerUtility.createConnection();
		con.connect(function (err) {
				if (err) throw err;
				var sql = "select * from events where eid =  ?";
				con.query(sql,[req.query.eventID], function (err, result) {
					if (err) throw err;
					con.end();
					res.send(result);
				});
			}
	)}


	/**
	 *  This method uploads the event poster on server under images folder with timestamp
	 *  to avoid overwrite of image with same name.
	 * @param req
	 * @param res
	 */
	ManagementController.upload = function(req, res){
			let uploadedFile = req.files.file;
			uploadedFile.mv('images/'+Date.now()+"_"+uploadedFile.name, function(err) {
				if (err)
					return res.status(500).send(err);

				res.send('Poster Uploaded!');
			});
	}

	/**
	 * This method creates HelperOptions require for sending invitation and send invitation to all mailList addresses
	 * @param req
	 * @param res
	 */
	ManagementController.sendMail = function(req, res){
		const memo = req.body;
		const mailList = memo.invitations.split(',');
		let HelperOptions = {
			from: '"SFEVENTS" <sfevents848@gmail.com',
			to: mailList,
			subject: 'Invitation',
			html: "<div style='background-color: black; height: 800px;color: gold;font-family:cursive; text-align: center'>" +
				" <h1>*** Invitation ***</h1> " +
				"<h2>Event Name : "+ memo.title +"</h2>"+
				"<h2>Description :" + memo.description+ "}}</h2>"+
				"<h2>Time : " +memo.start_time+ "To"+ memo.end_time+"</h2>"+
				"<h2>Maximum Attending: "+ memo.max_attending+"</h2>"+
				"<h2>Price :"+memo.price+"</h2>"+
				"<h2>Location :"+memo.location+"</h2>"+
				"</div>"
		};

		ControllerUtility.sendInvitations(HelperOptions);
		res.send("Invitations sent successfully");
	}

	/**
	 * Set events parameter
	 * @param event
	 */
	function setEventParameters(event) {
		if (event.is_public) {
			event.is_public = true
		} else {
			event.is_public = false
		}
		event.start_time = moment(event.date_time[0]).format('YYYY-MM-DD HH:mm:ss');
		event.end_time = moment(event.date_time[1]).format('YYYY-MM-DD HH:mm:ss');
		event.is_over = true;

		if ((new Date(event.date_time[0]).getTime()) > (new Date().getTime())) {
			event.is_over = false;
		}

		if (!event.poster) {
			event.poster = null;
		}
}



module.exports = ManagementController;