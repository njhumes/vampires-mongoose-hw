const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const vampireSchema = new Schema({
    name: { type: String, required: true },
    hair_color: { type: String, default: 'blonde' },
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    victims: { type: Number, required: true, min: 1}
});


const Vampire = mongoose.model('Vampire', vampireSchema);
// creates a collection in the connected database

module.exports = Vampire;