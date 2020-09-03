const express = require("express");
const app = express();
const cors = require('cors')
const commentRoutes = require("./routes/comments");
const userRoutes = require("./routes/users");
const config = require("./config/default");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

app.listen(config.PORT, () => console.log("App is running on port " + config.PORT));
