var mongoose = require('mongoose');
var timestamps = require('goodeggs-mongoose-timestamps');
var schema = mongoose.Schema;
var bcrypt = require('bcryptjs'), SALT_WORK_FACTOR = 10;

var userSchema = new schema({
    id: {type: String},
	email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {type: String},
    created_at: Date,
    updated_at: Date,
    active: { type: Boolean, default: true},
    contacts: [{ type: schema.Types.ObjectId, ref: 'user' }],
    // activation_token: {
    //     type: String,
    //     required: true}

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

userSchema.plugin(timestamps);

module.exports = mongoose.model('user', userSchema);