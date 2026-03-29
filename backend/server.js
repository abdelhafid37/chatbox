const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { config } = require("dotenv");
const cors = require("cors");

// load env config
config();

// port default to 5000 & origin to all
const PORT = process.env.PORT || 5000;
const origin = process.env.FRONTEND_URL || "*";

// cors config for express & socket.io
const corsConfig = { origin, methods: ["GET", "POST"] };

// express instance & CORS middleware
const app = express();
app.use(cors(corsConfig));

// http server wraps express instance
const server = createServer(app);
// socket instance with CORS config
const io = new Server(server, { cors: corsConfig });

// listen for connection event
io.on("connection", function (socket) {
  console.log(`> [socket] client connected -- socket id (${socket.id})`);

  // listen for disconnect event
  socket.on("disconnect", function () {
    console.log(`> [socket] client disconnected -- socket id (${socket.id})`);
  });
});

// listen to http server on defined port
server.listen(PORT, function () {
  console.log(`> [server] HTTP server running on port (${PORT})`);
});
