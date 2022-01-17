//before login
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

//after login
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
