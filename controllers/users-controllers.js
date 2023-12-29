const bcrypt = require('bcryptjs')
const User = require("../models/users");

const getUsers = async (req, res, next) => {
  const users = await User.find()
  res.json({ users });
};

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12)

  const newUser = new User({email, password: hashedPassword});

  await newUser.save();

  res.status(201).json({ user: newUser });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({email: email})

  if(!validUser){
    res.json({message: "Invalid user"})
  }

  const validPassword = await bcrypt.compare(password, validUser.password)

  if(!validPassword){
    res.json({message: "Invalid password"})
  }

  res.json({ message: "logged in successfully" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
