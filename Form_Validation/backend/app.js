const express = require("express");
const morgan = require("morgan");
const userRouter = require("./Routes/userRoute");
const customError = require("./utils/customError");
const globalErrorHandler = require("./controller/errorController");
const cors = require("cors");

let app = express();

const crosOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  Credentials: true,
};

app.use(cors(crosOption));

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static("./public"));

app.use("/api/v1/form", userRouter);
// app.all("*", (req, res, next) => {
//   const err = new customError(
//     `can not find ${req.originalUrl} on the server!`,
//     404
//   );
//   next(err);
// });

app.use(globalErrorHandler);

app.use((req, res, next) => {
  req.requstedAt = new Date().toISOString();
  next();
});

module.exports = app;
