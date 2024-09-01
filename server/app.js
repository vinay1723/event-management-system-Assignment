const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routers/userRouter");
const usereventRouter = require("./routers/usereventRouter");
const globalErrorHandler = require("./controllers/errorController");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "https://vinays-ems.netlify.app", // Update to match your React app's URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`${req.originalUrl}`);
  next();
});
app.use("/api/v1/user", userRouter);
app.use("/api/v1/userevent", usereventRouter);
app.use(globalErrorHandler);
module.exports = app;
