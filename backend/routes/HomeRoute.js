const HomeController = require('../controllers/HomeController.js');

module.exports = function(app) {

    app.get('/api/search', function(req, res) {

         HomeController.search(req, res);
    });
}