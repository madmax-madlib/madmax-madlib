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
        posterImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        segment1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        segment2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment3: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment4: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment5: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment6: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        segment7: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment8: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment9: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        segment10: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        imageSegment1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageSegment2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment4: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment5: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment6: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment7: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment8: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment9: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageSegment10: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Stories;
}