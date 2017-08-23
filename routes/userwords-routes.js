// *********************************************************************************
// userwords-routes.js - this file offers a set of routes 
// for displaying and saving data to the db related to the words users provide
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
// Routes go here

// finds all of the user word input from enter-my-story form page to reveal-my-story page
app.get("/reveal/:id", function(req, res) {
	db.User_words.findOne({
		include: [db.Stories],
		where: {
			id: req.params.id
			}
		}).then(function(dbUserwords) {
		  res.render("reveal", {
            storyBuilder: storyBuilder(dbUserwords)
        });   		

		});
	});

app.post("/api/formsubmit/", function(req, res){
	db.User_words.create(req.body).then(function(dbUserwords) {
		res.redirect("/reveal/" + id);
	});
});

};