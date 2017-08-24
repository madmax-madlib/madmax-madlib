// *********************************************************************************
// userwords-routes.js - this file offers a set of routes 
// for displaying and saving data to the db related to the words users provide
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var storyBuilder = require("../storyBuilder.js");

// Routes
// =============================================================
module.exports = function (app) {

    // finds all of the user word input from enter-my-story form page to reveal-my-story page
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
                storyName: dbObject.Story.storyName
            });

        });
    });


        
};