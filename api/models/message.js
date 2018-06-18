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



messageSchema.plugin(timestamps);

module.exports = mongoose.model('message', messageSchema);