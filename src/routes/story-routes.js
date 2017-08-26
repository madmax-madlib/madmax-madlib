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
            var story = dbResponse.segment1 + dbResponse.segment2 + dbResponse.segment3 + dbResponse.segment4 + dbResponse.segment5 + dbResponse.segment6 + dbResponse.segment7 + dbResponse.segment8 + dbResponse.segment9 + dbResponse.segment10;
            res.render("form", {
                helpers: {
                    times: function (n, block) {
                        var accum = '';
                        for (var i = 0; i < n; ++i)
                            accum += block.fn(i);
                        return accum;
                    }
                },
                num: deriveMissingWords(story),
                title: dbResponse.storyName,
                storyId: req.params.id
            });
        });
    });
};