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
    app.get("/reveal/:id", function (req, res) {
        db.User_words.findOne({
            include: [db.Stories],
            where: {
                id: req.params.id
            }
        }).then(function (dbUserwords) {
            console.log(dbUserwords);
            res.render("reveal", {
                storyArray: storyBuilder(dbUserwords),
                storyName: dbUserwords.Story.storyName,
                id: req.params.id
            });

        });
    });

    app.post("/api/formsubmit", function (req, res) {

        var wordObject = {
            noun: JSON.stringify(req.body.noun),
            pluralNoun: JSON.stringify(req.body.pluralNoun),
            person: JSON.stringify(req.body.person),
            place: JSON.stringify(req.body.place),
            number: JSON.stringify(req.body.number),
            verb: JSON.stringify(req.body.verb),
            adjective: JSON.stringify(req.body.adjective),
            adverb: JSON.stringify(req.body.adverb),
            bodyPart: JSON.stringify(req.body.bodyPart),
            foodType: JSON.stringify(req.body.food),
            verb_ing: JSON.stringify(req.body.verb_ing),
            verb_ed: JSON.stringify(req.body.verb_ed),
            animal: JSON.stringify(req.body.animal),
            StoryId: parseInt(req.body.storyId)
        }
        db.User_words.create(wordObject).then(function (dbUserWords) {
            res.redirect("/cards/" + dbUserWords.id);
        });
    });
};