module.exports = function(app) {
	app.post('/login',
		passport.authenticate('local', { successRedirect: '/HomeRoute',
			failureRedirect: '/login',
			failureFlash: true })
		);
}