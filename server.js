var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exHandlebars = require("express-handlebars");
var path = require("path");
var favicon = require('serve-favicon');

var app = express();
var PORT = process.env.PORT || 8080;
app.use(favicon(path.join(__dirname,'public','assets','images', 'favicon.ico')));

// Requiring our models for syncing
var db = require("./src/models");

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
app.engine("handlebars", exHandlebars({ defaultLayout: process.cwd() + '/src/views/layouts/main' }));
app.set('views', process.cwd() + '/src/views');
app.set("view engine", "handlebars");

//Routes
require("./src/routes/story-routes.js")(app);
require("./src/routes/userwords-routes.js")(app);
require("./src/routes/cards-routes.js")(app);


var sequelizeForce = true;
//if this is production, don't force sync the db. We don't want to wipe out the db
// every time we merge code into master
if(process.env.PORT){
    sequelizeForce = false;
}


db.sequelize.sync({ force: sequelizeForce }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});


