module.exports = function (sequelize, DataTypes) {
    var User_words = sequelize.define("User_words", {

        noun: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        pluralNoun: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        person: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        place: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        number: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        verb: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        adjective: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        bodyPart: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        foodType: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        adverb: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        verb_ing: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        animal: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        relationship: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        verb_ed: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        first_name: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        last_name: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        genre: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        dwelling: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        profession: {
            type: DataTypes.TEXT,
            allowNull: true
        },

    });

    User_words.associate = function (models) {
        User_words.belongsTo(models.Stories, {
            foreignKey: {
                allowNull: false
            }
        });

    }

    return User_words;

}