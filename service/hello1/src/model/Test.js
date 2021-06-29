const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TestSchema = new Schema({
  key: { type: String },
  value: { type: Number }
});

module.exports = model('Test', TestSchema, 'tests');
