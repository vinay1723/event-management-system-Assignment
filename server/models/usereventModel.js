const mongoose = require("mongoose");
const User = require("./userModel");

const usereventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "provide the user id"],
  },
  title: {
    type: String,
    lowercase: true,
    unique: true,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
  },
  category: {
    type: String,
  },
});

// usereventSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "user",
//     select: "email",
//   });
//   next();
//   // next();
// });

const Userevent = mongoose.model("Userevent", usereventSchema);

module.exports = Userevent;
