const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required field!"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required field!"],
    trim: true,
  },
  email: {
    type: String,
    require: [true, "Please enter your email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter the valid email!"],
  },
  phoneNumber: {
    type: Number,
    // minlength: 10,
    // maxlength: 10,
    require: [true, "Phone number is require"],
  },
  password: {
    type: String,
    require: [true, "Please enter the password"],
    // minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    require: [true, "Please confirm your password"],
    validate: {
      validator: function (val) {
        return val == this.password;
      },
      message: "Password and confirm password does not match!",
    },
  },
  age: {
    type: Number,
    require: [true, "Age is require"],
  },
  gender: {
    type: String,
    enum: ["male", "Female", "other"],
    require: [true, "Gender is require"],
  },
  interests: {
    type: [String],
  },
  dateOfBirth: {
    type: Date,
    require: [true, "Date of birth is require"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
