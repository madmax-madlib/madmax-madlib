module.exports = function (sequelize, DataTypes) {
    var User_words = sequelize.define("Input", {

        noun: {
            type: DataTypes.STRING,
            allowNull: true
        },

        pluralNoun: {
            type: DataTypes.STRING,
            allowNull: true
        },

        person: {
            type: DataTypes.STRING,
            allowNull: true
        },

        place: {
            type: DataTypes.STRING,
            allowNull: true
        },

        number: {
            type: DataTypes.STRING,
            allowNull: true
        },

        verb: {
            type: DataTypes.STRING,
            allowNull: true
        },
 
        adjective: {
            type: DataTypes.STRING,
            allowNull: true
        },

        bodyPart: {
            type: DataTypes.STRING,
            allowNull: true
        },

        foodType: {
            type: DataTypes.STRING,
            allowNull: true
        },

        verb_ing: {
            type: DataTypes.STRING,
            allowNull: true
        },

        animal: {
            type: DataTypes.STRING,
            allowNull: true
        },

    });

    // User_words.associate = function(models) {
    //     User_words.hasOne(models.Stories,{

    //     });
    // }
    
    return User_words;
}