var should = require("chai").should();
var deriveMissingWords = require("../src/deriveMissingWords.js");

describe("Derive Missing Words", function () {
    it("should return 0's for each key if empty string given", function () {
        var result = deriveMissingWords("");
        result.noun.should.equal(0);
        result.plural_noun.should.equal(0);
        result.place.should.equal(0);
        result.food.should.equal(0);
        result.animal.should.equal(0);
        result.number.should.equal(0);
        result.bodyPart.should.equal(0);
        result.person.should.equal(0);
        result.relationship.should.equal(0);
        result.first_name.should.equal(0);
        result.last_name.should.equal(0);
        result.vehicle.should.equal(0);
        result.genre.should.equal(0);
        result.dwelling.should.equal(0);
        result.profession.should.equal(0);
        result.verb.should.equal(0);
        result.verb_ing.should.equal(0);
        result.verb_ed.should.equal(0);
        result.adjective.should.equal(0);
        result.adverb.should.equal(0);
    });

    it("should return 0's for each key if no string matches are found", function () {
        var result = deriveMissingWords("hello there noun");
        result.noun.should.equal(0);
        result.plural_noun.should.equal(0);
        result.place.should.equal(0);
        result.food.should.equal(0);
        result.animal.should.equal(0);
        result.number.should.equal(0);
        result.bodyPart.should.equal(0);
        result.person.should.equal(0);
        result.relationship.should.equal(0);
        result.first_name.should.equal(0);
        result.last_name.should.equal(0);
        result.vehicle.should.equal(0);
        result.genre.should.equal(0);
        result.dwelling.should.equal(0);
        result.profession.should.equal(0);
        result.verb.should.equal(0);
        result.verb_ing.should.equal(0);
        result.verb_ed.should.equal(0);
        result.adjective.should.equal(0);
        result.adverb.should.equal(0);
    });

    it("should return 1's for each key if one string match is found", function () {
        var result = deriveMissingWords("<<noun>>noun<<plural noun>><<place>><<food>><<animal>><<number>><<part of body>><<person>><<relationship>><<first name>><<last name>><<vehicle>><<genre>><<dwelling>><<profession>><<verb>><<verb ending in ing>><<verb ending in ed>><<adjective>><<adverb>>");
        result.noun.should.equal(1);
        result.plural_noun.should.equal(1);
        result.place.should.equal(1);
        result.food.should.equal(1);
        result.animal.should.equal(1);
        result.number.should.equal(1);
        result.bodyPart.should.equal(1);
        result.person.should.equal(1);
        result.relationship.should.equal(1);
        result.first_name.should.equal(1);
        result.last_name.should.equal(1);
        result.vehicle.should.equal(1);
        result.genre.should.equal(1);
        result.dwelling.should.equal(1);
        result.profession.should.equal(1);
        result.verb.should.equal(1);
        result.verb_ing.should.equal(1);
        result.verb_ed.should.equal(1);
        result.adjective.should.equal(1);
        result.adverb.should.equal(1);
    });

    it("should return 2's for each key if two string matches are found", function () {
        var result = deriveMissingWords("<<noun>><<plural noun>><<place>><<food>><<animal>><<number>><<part of body>><<person>><<relationship>><<first name>><<last name>><<vehicle>><<genre>><<dwelling>><<profession>><<verb>><<verb ending in ing>><<verb ending in ed>><<adjective>><<adverb>><<noun>><<plural noun>><<place>><<food>><<animal>><<number>><<part of body>><<person>><<relationship>><<first name>><<last name>><<vehicle>><<genre>><<dwelling>><<profession>><<verb>><<verb ending in ing>><<verb ending in ed>><<adjective>><<adverb>>");
        result.noun.should.equal(2);
        result.plural_noun.should.equal(2);
        result.place.should.equal(2);
        result.food.should.equal(2);
        result.animal.should.equal(2);
        result.number.should.equal(2);
        result.bodyPart.should.equal(2);
        result.person.should.equal(2);
        result.relationship.should.equal(2);
        result.first_name.should.equal(2);
        result.last_name.should.equal(2);
        result.vehicle.should.equal(2);
        result.genre.should.equal(2);
        result.dwelling.should.equal(2);
        result.profession.should.equal(2);
        result.verb.should.equal(2);
        result.verb_ing.should.equal(2);
        result.verb_ed.should.equal(2);
        result.adjective.should.equal(2);
        result.adverb.should.equal(2);
    });


})