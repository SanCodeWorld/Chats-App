const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "*",
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("socket connected");

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(3000, () => {
  console.log("listening");
});
