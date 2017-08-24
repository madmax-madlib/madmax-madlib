module.exports = function (app) {

//Routes
app.get("/cards", function (req, res) {
            var cardObject = {
               storyName:"storyName", 
               storyDesc:"storyDesc",
               basicURL:"http://static.rogerebert.com/uploads/movie/movie_poster/up-2009/large_zh9DXJhBdHVVaWiDURTipADamcK.jpg",
               segments: ["segment1", "segment2", "segment3", "segment4", "segment5", "segment6", "segment7", "segment8", "segment9", "segment10"],
               segment1:"segment1",
               segment2:"segment2",
               segment3:"segment3",
               segment4:"segment4",
               segment5:"segment5",
               segment6:"segment6",
               segment7:"segment7",
               segment8:"segment8",
               segment9:"segment9",
               segment10:"segment10",
               createdAt:12,
               updatedAt:14
            };
            //res.render("cards", cardObject);
            res.render("cards", {"card": cardObject});
    });
};