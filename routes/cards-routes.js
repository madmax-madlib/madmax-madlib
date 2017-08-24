// *********************************************************************************
// cards-routes.js - this file offers a set of routes 
// for displaying the cards
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var storyBuilder = require("../storyBuilder.js");

// Routes
// =============================================================

module.exports = function (app) {

    //Routes
    app.get("/cards/:id", function (req, res) {
        db.User_words.findOne({
            include: [db.Stories],
            where: {
                id: req.params.id
            }
        }).then(function (dbUserwords) {
            console.log(dbUserwords);
            res.render("cards", {
                storyArray: storyBuilder(dbUserwords),
                storyName: dbUserwords.Story.storyName,
                id: req.params.id
            });

        });
    });
}