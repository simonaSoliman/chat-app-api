var mongoose = require('mongoose');
var timestamps = require('goodeggs-mongoose-timestamps');
var schema = mongoose.Schema;

var messageSchema = new schema({
    id: {type: String},
    message: {type: String}, 
    attachment: {type: String}, 
    sender: { type: schema.Types.ObjectId, ref: 'user' },
    receiver: { type: schema.Types.ObjectId, ref: 'user' },
    created_at: Date,
    updated_at: Date

});

// userSchema.pre('save', function (next) {
//     var user = this;
// 	// only hash the password if it has been modified (or is new)
//     if (!user.isModified('password'))
//         return next();
//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//         if (err)
//             return next(err);
//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function (err, hash) {
//             if (err)
//                 return next(err);

//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });

// userSchema.methods.saveImage= function (imageBytes, imageName, email, cb) {
//     imageSaver(imageBytes, imageName, email, "user", function(err, callback){
//         cb(callback);
//     });
// }

// userSchema.methods.comparePassword = function (candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err)
//             return cb(err);
//         cb(null, isMatch);
//     });
// };

messageSchema.plugin(timestamps);

module.exports = mongoose.model('message', messageSchema);