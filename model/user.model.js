const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// username, password, fname, lname,

//
const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  //bookStore: [book],
});

module.exports = mongoose.model("User", UserSchema);
