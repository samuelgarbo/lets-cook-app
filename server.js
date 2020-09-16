const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controllers");

const config = require("./config/default");

app.use(express.json());
app.use(cors());

app.use("/api/users", controller.users);
app.use("/api/comments", controller.comments);
app.use("/api/favorites", controller.favorites);
app.use("/api/recipes", controller.recipes);

app.listen(config.PORT, () =>
  console.log("App is running on port " + config.PORT)
);
