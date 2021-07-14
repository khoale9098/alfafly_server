import { createServer } from "http";
import express, { Application } from "express";

const app: Application = express();

const PORT = 4000;
const NODE_ENV = "development";

const httpServer = createServer(app);

httpServer.listen({ port: PORT }, () => {
  console.log("NODE_ENV", NODE_ENV);
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
