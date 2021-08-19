var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router(require("./db.js")());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 4000, function () {
  console.log("JSON Server is running");
});
