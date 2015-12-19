var db = require('../db');




module.exports = {
  messages: {
    get: function (roomname) {
      //call some function from database (which will have a query in it)
      db.messages.get(roomname);
    }, // a function which produces all the messages
    post: function (msg) {
      console.log(msg);
      db.connection.query('INSERT INTO messages SET ?', msg, function(err, result){
        if (err) {
          console.log('error', err)
        } else {
          console.log(result);
          return result;
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      console.log(username);
      db.connection.query('INSERT INTO users (`username`) values ("'+username+'")');
    }
  }
};

