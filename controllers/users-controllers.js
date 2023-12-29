const { v4: uuid } = require("uuid");
const users = [
  {
    id: "u1",
    email: "test@test.com",
    password: "123456",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users });
};

const signup = (req, res, next) => {
  const { email, password } = req.body;

  const newUser = { id: uuid(), email, password };

  users.push(newUser);

  res.status(201).json({ user: newUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const validUser = users.find((user) => user.email === email);

  if (!validUser || validUser.password !== password) {
    res.json({ message: "user not valid" });
  }

  res.json({ message: "logged in successfully" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
