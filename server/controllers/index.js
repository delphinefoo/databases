var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
        models.messages.get(req.body, function(message) {
        res.writeHead(200);
        console.log('stringified message: ', JSON.stringify(message));
        res.end(JSON.stringify(message));
      });
      // res.writeHead(200);
      // res.end(message);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.writeHead(201);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body);
      res.writeHead(200);
      res.end(res.body);
    },
    post: function (req, res) {
      //call models post function, passing it request.json.username
      models.users.post(req.body.username);
      res.writeHead(201);
      res.end();
      //respond with status code and headers? and end?
    }
  }
};
