module.exports = function (sequelize, DataTypes) {
    var User_words = sequelize.define("Input", {
        verb: {
            type: DataTypes.STRING,
            allowNull: false
        
        },

        noun: {
            type: DataTypes.STRING,
            allowNull: false
        },

        adjective: {
            type: DataTypes.STRING,
            allowNull: false
        },

        adverb: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    // User_words.associate = function(models) {
    //     User_words.hasOne(models.Stories,{

    //     });
    // }
    
    return User_words;