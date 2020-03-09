const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    user1: {type: [{ type: ObjectId, ref: 'User' }], required: true},
    user2: {type: [{ type: ObjectId, ref: 'User' }], required: true},
    user3: {type: [{ type: ObjectId, ref: 'User' }]},
    user4: {type: [{ type: ObjectId, ref: 'User' }]},
    date: { type: Date, required: true },
    status: {type: String, required: true},
    court: {type: [{ type: ObjectId, ref: 'Court' }], required: true}
})