var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var http = require("http");
const mongoose = require("mongoose");

var daysRouter = require("./routes/daysRouter");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersRouter");

var app = express();
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/testData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Connected correctly, dudes");
    },
    (error) => console.log(error)
  );

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use('/users', usersRouter);
app.use("/days", daysRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//
// var port = normalizePort(process.env.PORT || '3000');
app.set("port", 8080);

//
var server = http.createServer(app);

//
server.listen(8080);
server.on("error", () => {
  console.log("ERROR!!!!! MOTHAFUCKERS");
});
server.on("listening", () => {
  console.log("GOOD. MOTHAFUCKERS");
});

module.exports = app;
