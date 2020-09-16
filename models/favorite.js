const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
  totalTime: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredientLines: [
    {
      type: String,
      required: true,
    },
  ],
  totalNutrients: {
    CHOCDF: {
      label: String,
      quantity: Number,
      unit: String,
    },
    ENERC_KCAL: {
      label: String,
      quantity: Number,
      unit: String,
    },
    FAT: {
      label: String,
      quantity: Number,
      unit: String,
    },
    PROCNT: {
      label: String,
      quantity: Number,
      unit: String,
    },
    FIBTG: {
      label: String,
      quantity: Number,
      unit: String,
    },
  },
  totalWeight: {
    type: String,
    required: true,
  },
  yield: {
    type: Number,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;
