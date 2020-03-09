const { Schema, Types: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: { type: String},
    surface: { type: String, required: true },
})