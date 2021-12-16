const http = require("http");
const app = require("./api/app");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3020;
const server = http.createServer(app);
server.listen(port, () =>
  console.log("Server is up and running port: " + port)
);
