module.exports = function (sequelize, DataTypes) {
    var Stories = sequelize.define("Stories", {


        storyName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        storyDesc: {
            type: DataTypes.STRING,
            allowNull: false        
        },

        segment1: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment2: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment3: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment4: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    return Stories;