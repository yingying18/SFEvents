
var ManagementController = require('../controllers/ManagementController.js');

module.exports = function(app) {
    /**
     * service to insert events
     */
    app.post('/api/insert', function (req, res) {

        console.log("In routesssss");
        ManagementController.insert(req, res);
    });
}