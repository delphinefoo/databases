var db = require('../db');




module.exports = {
  messages: {
    get: function (msg, callback) {
      db.connection.query('SELECT * FROM messages', function(err, result){
        if (err) {
          console.log('error', err)
        } else {
          // console.log('Results', result);
         callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (msg) {
      db.connection.query('INSERT INTO messages SET ?', msg, function(err, result){
        if (err) {
          console.log('error', err)
        } else {
          return result;
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      db.connection.query('INSERT INTO users (`username`) values ("'+username+'")');
    }
  }
};

