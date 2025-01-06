const mongoose = require('mongoose');
const idValidator = require("mongoose-id-validator");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0 },
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
});

itemSchema.plugin(idValidator);

module.exports = mongoose.model('Item', itemSchema);
