const express = require("express");

const productsRouter = require("./products_router");
const usersRouter = require("./users_router");
const loginRouter = require("./login_router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/auth", loginRouter);
}

module.exports = routerApi;
