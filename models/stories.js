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

        segment5: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment6: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment7: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment8: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment9: {
            type: DataTypes.STRING,
            allowNull: false
        },

        segment10: {
            type: DataTypes.STRING,
            allowNull: false
        },


    });

    return Stories;