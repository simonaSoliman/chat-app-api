var mongoose = require('mongoose'),
User = require('../models/user'),
fs = require('fs');
Message = require('../models/message');

//listing all user contacts
//for testing put user Id here
exports.list_all_contacts = function(req, res) {
  req.body.userId ="5b1f7aa507eaef167c51ac94";
  User.findOne({_id:req.body.userId}).populate({path: 'contacts'}).exec(function(err, user) {
    if (err)
      res.send(err);
    // res.json({status:200, message:'success', data:result});
    res.json(user.contacts);
  });
};



//save the message that sent from user to another one
exports.send = function(req, res) {
  var new_message = new Message(req.body);
  User.findOne({_id:req.body.sender}).exec(function(err, user){
    if (user) {
      new_message.save(function(err, msg) {
        if (err)
          res.send(err);
        // res.json({status:200, message:'success', data:msg});
        res.json(msg);
      });
    }else{
      console.error(err)
    }
    
  });
  
};

//get single chat history messages
exports.chat_history = function(req, res) {
  req.params.currentUser ="5b1f7aa507eaef167c51ac94";
  var user_id = mongoose.Types.ObjectId(req.params.userId);
  Message.find({ $or:[ {'receiver':req.params.userId, 'sender':req.params.currentUser}, {'sender':req.params.userId,'receiver' :req.params.currentUser}]}, function(err, messages) {
    if (err){
      console.log(err)
      res.send(err);
    }else{
      // res.json({status:200, message:'success', data:messages})
      // io.on('connection', function(socket){
      //   console.log('a user connected');
        res.json(messages)
      // });
      
    }
  });
};

//upload single file to be saved and save it as a message but it still have issue I will resolve it
exports.upload = function(req, res){
  var message_id= '';
  var dirname = "uploads/images/uploads/"+message_id;
    if (!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
    }

    var im_parts = ffileToUpload.name.split('.');  
    var ts = Math.round(new Date().getTime()/1000)
    var dirnameResize = dirname + "/" + im_parts[0] + ts +"."+ im_parts[1];
    fs.writeFile(dirnameResize,fileToUpload,(err) => {
        if (err)
            return cb(err, "")
            dirname = process.env.HOST_NAME+"/images/"+model_path+"/"+id+"/"+ im_parts[0] + ts +"."+ im_parts[1];
            return cb(null, dirname)

        
    });

}
