var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(message) {
        res.writeHead(200);
        res.end(JSON.stringify(message));
      });
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
      models.users.get(function(user) {
        res.writeHead(200);
        console.log('stringified user: ', JSON.stringify(user));
        res.end(JSON.stringify(user));
      });
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
