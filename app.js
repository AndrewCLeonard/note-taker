var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "/public/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // changed to true
app.use(cookieParser());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

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

module.exports = app;
