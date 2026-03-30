const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const { config } = require("dotenv");
const cors = require("cors");

config();

const origin = process.env.FRONTEND_URL || "*";
const methods = ["GET", "POST"];

const app = express();
app.use(cors({ origin, methods }));

const server = createServer(app);
const io = new Server(server, { cors: { origin, methods } });

io.on("connection", function (socket) {
  console.log(`> [socket.io] Client connected -- socket id (${socket.id})`);

  socket.on("disconnect", function (reason) {
    console.log(
      `> [socket.io] Client disconnected (${reason}) -- socket id (${socket.id})`,
    );
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, function () {
  console.log(`> [server] HTTP server running on port (${PORT})`);
});
