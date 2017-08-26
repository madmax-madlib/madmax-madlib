module.exports = function (dbObject) {
    var StoryObj = dbObject.Story;
    var storyName = StoryObj.storyName;
    var arrayOfSegments = [
        StoryObj.segment1,
        StoryObj.segment2,
        StoryObj.segment3,
        StoryObj.segment4,
        StoryObj.segment5,
        StoryObj.segment6,
        StoryObj.segment7,
        StoryObj.segment8,
        StoryObj.segment9,
        StoryObj.segment10,
    ];
    var wordObject = {
        noun: JSON.parse(dbObject.noun),
        pluralNoun: JSON.parse(dbObject.pluralNoun),
        person: JSON.parse(dbObject.person),
        place: JSON.parse(dbObject.place),
        number: JSON.parse(dbObject.number),
        verb: JSON.parse(dbObject.verb),
        adjective: JSON.parse(dbObject.adjective),
        bodyPart: JSON.parse(dbObject.bodyPart),
        foodType: JSON.parse(dbObject.foodType),
        verb_ing: JSON.parse(dbObject.verb_ing),
        animal: JSON.parse(dbObject.animal),
        relationship: JSON.parse(dbObject.relationship),
        dwelling: JSON.parse(dbObject.dwelling),
        firstName: JSON.parse(dbObject.first_name),
        lastName: JSON.parse(dbObject.last_name),
        genre: JSON.parse(dbObject.genre),
        profession: JSON.parse(dbObject.profession)
    }

    // section below loops through each differnt given for each word type
    // and then loops through each story segment, replacing the instance of
    // the <<wordType>> with the word given by the user, and updates the segment
    
    if (wordObject.noun) {
        for (var i = 0; i < wordObject.noun.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<noun>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<noun>>", wordObject.noun[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.pluralNoun) {
        for (var i = 0; i < wordObject.pluralNoun.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<plural noun>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<plural noun>>", wordObject.pluralNoun[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.person) {
        for (var i = 0; i < wordObject.person.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<person>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<person>>", wordObject.person[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.place) {
        for (var i = 0; i < wordObject.place.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<place>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<place>>", wordObject.place[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.number) {
        for (var i = 0; i < wordObject.number.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<number>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<number>>", wordObject.number[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.verb) {
        for (var i = 0; i < wordObject.verb.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<verb>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<verb>>", wordObject.verb[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.adjective) {
        for (var i = 0; i < wordObject.adjective.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<adjective>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<adjective>>", wordObject.adjective[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.bodyPart) {
        for (var i = 0; i < wordObject.bodyPart.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<part of body>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<part of body>>", wordObject.bodyPart[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.foodType) {
        for (var i = 0; i < wordObject.foodType.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<food>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<food>>", wordObject.foodType[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.verb_ing) {
        for (var i = 0; i < wordObject.verb_ing.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<verb ending in ing>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<verb ending in ing>>", wordObject.verb_ing[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.animal) {
        for (var i = 0; i < wordObject.animal.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<animal>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<animal>>", wordObject.animal[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.relationship) {
        for (var i = 0; i < wordObject.relationship.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<relationship>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<relationship>>", wordObject.relationship[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.dwelling) {
        for (var i = 0; i < wordObject.dwelling.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<dwelling>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<dwelling>>", wordObject.dwelling[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.firstName) {
        for (var i = 0; i < wordObject.firstName.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<first name>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<first name>>", wordObject.firstName[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.lastName) {
        for (var i = 0; i < wordObject.lastName.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<last name>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<last name>>", wordObject.lastName[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.genre) {
        for (var i = 0; i < wordObject.genre.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<genre>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<genre>>", wordObject.genre[i]);
                    break;
                }
            }
        }
    }
    if (wordObject.profession) {
        for (var i = 0; i < wordObject.profession.length; i++) {
            for (var j = 0; j < arrayOfSegments.length; j++) {
                if (arrayOfSegments[j].includes("<<profession>>")) {
                    arrayOfSegments[j] = arrayOfSegments[j].replace("<<profession>>", wordObject.profession[i]);
                    break;
                }
            }
        }
    }

    return arrayOfSegments;
}