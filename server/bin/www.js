#!/usr/bin/env node

/**
 * NOT CURRENTLY BEING USED
 * I was trying to use Express's npx setup, but hitting walls
 */

/**
 * Module dependencies.
 */

import app from "../app.js";
// var app = require("../app");
import debugLib from "debug";
// var debug = require("debug")("note-taker:server");
import http from "http";
// var http = require("http");

const debug = debugLib("note-taker:server");

/**
 * Get port from environment and store in Express.
 */

var PORT = normalizePORT(process.env.PORT || "3000");
app.set("port", PORT);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided PORT, on all network interfaces.
 */

server.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a PORT into a number, string, or false.
 */

function normalizePORT(val) {
	var PORT = parseInt(val, 10);

	if (isNaN(PORT)) {
		// named pipe
		return val;
	}

	if (PORT >= 0) {
		// PORT number
		return PORT;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind =
		typeof PORT === "string" //
			? "Pipe " + PORT
			: "PORT " + PORT;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind =
		typeof addr === "string" //
			? "pipe " + addr
			: "PORT " + addr.PORT;
	debug("Listening on " + bind);
}
