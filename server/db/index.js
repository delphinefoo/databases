var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
exports.connection=mysql.createConnection({
  user:"root",
  password:"",
  database:"chat"
});

//request method
//uri pathname: ends in messages, users
  //query string
    //SELECT message_text, username, maybe created_at
    //WHERE roomname if roomname provided
    //FROM messages

module.exports={
  messages: {
    get: function(roomname){
      roomname = '= "'+roomname+'"' || 'LIKE "%"'
      exports.connection.query('SELECT `message_text` `username`
                                FROM `messages`
                                WHERE `roomname` '+roomname);
      // SELECT message_text, username
        //where roomname if provided

      //FROM tablename
    },
    post: function(){

    }
  },

}
