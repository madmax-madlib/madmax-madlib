// *********************************************************************************
// story-routes.js - this file offers a set of routes 
// for displaying and saving data to the db related to stories
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var deriveMissingWords = require("../deriveMissingWords.js");

// Routes
// =============================================================
module.exports = function (app) {
    // Routes go here
    app.get("/", function (req, res) {
        db.Stories.findAll({}).then(function (dbResponse) {
            var storyObject = {
                story: dbResponse
            };
            console.log(JSON.stringify(storyObject));
            res.render("menu", storyObject);
        });
    });

    app.get("/story/:id", function (req, res) {
        console.log("story get worked");
        db.Stories.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbResponse) {
            res.render("form", {
                helpers: {
                    times: function (n, block) {
                        var accum = '';
                        for (var i = 0; i < n; ++i)
                            accum += block.fn(i);
                        return accum;
                    }
                },
                num: deriveMissingWords(dbResponse),
                title: dbResponse.storyName,
                storyId: req.params.id
            });
        });
    });
};