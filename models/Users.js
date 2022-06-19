const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('user', UserSchema);