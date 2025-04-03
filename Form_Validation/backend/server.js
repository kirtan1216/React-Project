const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception occured! Shutting down...");

  process.exit(1);
});

const app = require("./app");

console.log(process.env);

mongoose.connect(process.env.CONN_STR, {}).then((conn) => {
  console.log("DB connection successful");
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection occured! Shutting down...");

  server.close(() => {
    process.exit(1);
  });
});
