const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3006;

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: true,
});

function timeInSeconds() {
  return Math.floor(Date.now() / 1000);
}

function log(...args) {
  console.log(timeInSeconds(), ...args);
}

io.on("connection", (socket) => {
  // literally do nothing, just accept the connection and log it
  log("socket connected", socket.id);

  socket.on("disconnect", () => {
    log("socket disconnected", socket.id);
  });
});

httpServer.listen(PORT);
console.log(`Socket server listening on port ${PORT}`);
