module.exports = function(app) {
  var chatApp = require('../controllers/chatAppController');
 

  app.route('/list_all_contacts')
    .get(chatApp.list_all_contacts);


  app.route('/send')
    .post(chatApp.send);

  app.route('/chat/:userId')
    .get(chatApp.chat_history)
  app.route('/upload')
  	.post(chatApp.upload)
};
