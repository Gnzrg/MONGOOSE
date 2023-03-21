const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      unique: true,
    },
    foodPrice: Number,
    createdOn: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "tblFood" }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
