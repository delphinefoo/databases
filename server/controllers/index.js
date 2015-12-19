var models = require('../models');
var bluebird = require('bluebird');
bluebird.promisifyAll(models);


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.writeHead(201);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //call models post function, passing it request.json.username
      models.users.post(req.body.username);

      res.writeHead(201);
      res.end();
      //respond with status code and headers? and end?
    }
  }
};

 // get: function(roomname){
 //      roomname = '= "'+roomname+'"' || 'LIKE "%"'
 //      exports.connection.query('SELECT `message_text` `username`
 //                                FROM `messages`
 //                                WHERE `roomname` '+roomname);
      // SELECT message_text, username
        //where roomname if provided

      //FROM tablename
    // },