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
            var storyArray = storyBuilder(dbUserwords);
            var cardArray = [];

            for (var i = 0; i<storyArray.length; i++){
                var cardObject = new Object();
                cardObject.text = storyArray[i];
                var j = i+1;
                console.log(dbUserwords.Story["imageSegment"+j]);
                cardObject.image = dbUserwords.Story["imageSegment"+j];
                cardArray.push(cardObject);
            }

            console.log(cardArray);

            res.render("cards", {
                cards: cardArray,
                storyName: dbUserwords.Story.storyName,
                id: req.params.id
            });

        });
    });
};
