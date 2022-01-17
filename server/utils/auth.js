const jwt = require("jsonwebtoken");

const secret = "abc123";
const expiration = "24h";

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
