/** Function that count occurrences of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 */
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

module.exports = function (story) {
    var wordCountObject = new Object();

    wordCountObject.noun = occurrences(story, "<<noun>>");
    wordCountObject.plural_noun = occurrences(story, "<<plural noun>>");
    wordCountObject.place = occurrences(story, "<<place>>");
    wordCountObject.food = occurrences(story, "<<food>>");
    wordCountObject.animal = occurrences(story, "<<animal>>");
    wordCountObject.number = occurrences(story, "<<number>>");
    wordCountObject.bodyPart = occurrences(story, "<<part of body>>");
    wordCountObject.person = occurrences(story, "<<person>>");
    wordCountObject.relationship = occurrences(story, "<<relationship>>");
    wordCountObject.first_name = occurrences(story, "<<first name>>");
    wordCountObject.last_name = occurrences(story, "<<last name>>");
    wordCountObject.vehicle = occurrences(story, "<<vehicle>>");
    wordCountObject.genre = occurrences(story, "<<genre>>");
    wordCountObject.dwelling = occurrences(story, "<<dwelling>>");
    wordCountObject.profession = occurrences(story, "<<profession>>");

    wordCountObject.verb = occurrences(story, "<<verb>>");
    wordCountObject.verb_ing = occurrences(story, "<<verb ending in ing>>");
    wordCountObject.verb_ed = occurrences(story, "<<verb ending in ed>>");

    wordCountObject.adjective = occurrences(story, "<<adjective>>");

    wordCountObject.adverb = occurrences(story, "<<adverb>>");

    console.log(wordCountObject);
    return wordCountObject;
}