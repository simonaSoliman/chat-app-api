var mongoose = require('mongoose');
var timestamps = require('goodeggs-mongoose-timestamps');
var schema = mongoose.Schema;
var bcrypt = require('bcryptjs'), SALT_WORK_FACTOR = 10;

var userSchema = new schema({
    id: {type: String},
    name:{type: String},
    image:{type: String},
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


});



userSchema.plugin(timestamps);

module.exports = mongoose.model('user', userSchema);