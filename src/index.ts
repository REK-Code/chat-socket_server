import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import "dotenv/config";

(() => {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    /* options */
  });

  io.listen(Number(process.env.PORT ?? 3000));
})();
