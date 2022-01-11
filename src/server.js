const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
const server = new ApolloServer({});

server.applyMiddleware({ app });

app.use(cors());

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
