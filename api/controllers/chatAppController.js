var mongoose = require('mongoose'),
User = require('../models/user'),
Message = require('../models/message');

//listing all user contacts
//for test send in request json object: {"userId":"5b1bba6e15b8bf210e0a9870"}
exports.list_all_contacts = function(req, res) {
  User.find({_id:req.body.userId}).populate('contacts').exec(function(err, contacts) {
    if (err)
      res.send(err);
    var result = {};
    for (var i = 0; i < contacts.length; ++i)
      result[i] = contacts[i].email;
    res.json(result);
  });
};




exports.send = function(req, res) {
  //we will send token from the front end to use user._id, but now we will
  //find user because we don;t have token yet
  // for test; {"sender":"simona@soliman.com",
  //            "message":"hi simonaaa"} >> request body form
  var new_message = new Message(req.body);
  User.findOne({email:req.body.sender}).exec(function(err, user){
    if (user) {
      new_message.sender = user._id;
      new_message.receiver = req.params.userId;
      new_message.save(function(err, msg) {
        if (err)
          res.send(err);
        res.json(msg);
      });
    }else{
      console.error(err)
    }
    
  });
  
};


exports.chat_history = function(req, res) {
  //find all messages related to this two users
  Message.find({ $or:[ {'receiver':req.params.userId, 'sender':req.params.currentUser}, {'sender':req.params.userId,'receiver' :req.params.currentUser}]}, function(err, messages) {
    if (err)
      res.send(err);
    res.json(messages);
  });
};
