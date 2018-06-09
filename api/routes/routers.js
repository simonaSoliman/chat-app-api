module.exports = function(app) {
  var chatApp = require('../controllers/chatAppController');
 

  app.route('/list_all_contacts')
    .get(chatApp.list_all_contacts);
    // .post(todoList.create_a_task);


  app.route('/chat/:userId')
    .get(chatApp.chat_history)
    .put(chatApp.send);
    // .delete(todoList.delete_a_task);
};
