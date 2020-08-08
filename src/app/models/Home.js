const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tree = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tree', Tree);
