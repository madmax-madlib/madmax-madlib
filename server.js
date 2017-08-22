var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exHandlebars = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Use handlebars as view engine, and set default layout to main.handlebars
app.engine("handlebars", exHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/story-routes.js")(app);
require("./routes/userwords-routes.js")(app);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});