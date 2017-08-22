module.exports = function (sequelize, DataTypes) {
    var Stories = sequelize.define("Stories", {


        storyName: {
            type: DataTypes.STRING,
            allowNull: true
        },

        storyDesc: {
            type: DataTypes.STRING,
            allowNull: true        
        },

        segment1: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment2: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment3: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment4: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment5: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment6: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment7: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment8: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment9: {
            type: DataTypes.STRING,
            allowNull: true
        },

        segment10: {
            type: DataTypes.STRING,
            allowNull: true
        },


    });

    return Stories;
}