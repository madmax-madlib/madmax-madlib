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

module.exports = function(dbResponse) {
    var story = dbResponse.segment1 + dbResponse.segment2 + dbResponse.segment3 + dbResponse.segment4 + dbResponse.segment5 + dbResponse.segment6 + dbResponse.segment7 + dbResponse.segment8 + dbResponse.segment9 + dbResponse.segment10;
    var wordCountObject = new Object();
    
    wordCountObject.noun = occurrences(story, "<<noun>>");
    wordCountObject.verb = occurrences(story, "<<verb>>");
    wordCountObject.adjective = occurrences(story, "<<adjective>>");
    wordCountObject.verb_ing = occurrences(story, "<<verb ending in ing>>");
    wordCountObject.plural_noun = occurrences(story, "<<plural noun>>");
    wordCountObject.place = occurrences(story, "<<place>>");
    wordCountObject.food = occurrences(story, "<<type of food>>");
    wordCountObject.animal = occurrences(story, "<<animal>>");
    console.log(wordCountObject);
    return wordCountObject;
}