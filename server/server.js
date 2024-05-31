const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket connected");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(3000, () => {
  console.log("listening");
});
