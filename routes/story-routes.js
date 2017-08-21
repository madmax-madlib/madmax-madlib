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
    app.get("/story/:id", function (req, res) {
        console.log("story get worked");
        db.Stories.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.render("inputWordForm", {
                helpers: {
                    times: function (n, block) {
                        var accum = '';
                        for (var i = 0; i < n; ++i)
                            accum += block.fn(i);
                        return accum;
                    },
                    randWord: function(){
                        return Math.random().toString(36).substring(7);
                    }
                },
                num: deriveMissingWords(dbPost),
                title: dbPost.storyName
            });
        });
    });
};