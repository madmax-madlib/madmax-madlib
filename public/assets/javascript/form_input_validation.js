
$("body").on("click touchstart", "#submitBtn", function() {

  
    if($("#noun").length && $("#noun").val().trim() === "") {
      Materialize.toast('Please complete entering nouns!', 4000);
    }

    if($("#plural_noun").length && $("#plural_noun").val().trim() === "") {
      Materialize.toast('Please complete entering plural nouns!', 4000);
    }

    if($("#animal").length && $("#animal").val().trim() === "") {
      Materialize.toast('Please complete entering animals!', 4000);
    }

    if($("#place").length && $("#place").val().trim() === "") {
      Materialize.toast('Please complete entering places!', 4000);
    }

    if($("#body_part").length && $("#body_part").val().trim() === "") {
      Materialize.toast('Please complete entering body parts!', 4000);
    }

    if($("#food").length && $("#food").val().trim() === "") {
      Materialize.toast('Please complete entering food!', 4000);
    }

    if($("#person").length && $("#person").val().trim() === "") {
      Materialize.toast('Please complete entering persons!', 4000);
    }

    if($("#number").length && $("#number").val().trim() === "") {
      Materialize.toast('Please complete entering numbers!', 4000);
    }

    if($("#dwelling").length && $("#dwelling").val().trim() === "") {
      Materialize.toast('Please complete entering dwellings!', 4000);
    }

    if($("#firstName").length && $("#firstName").val().trim() === "") {
      Materialize.toast('Please complete entering first names!', 4000);
    }

    if($("#lastName").length && $("#lastName").val().trim() === "") {
      Materialize.toast('Please complete entering last names!', 4000);
    }

    if($("#relationship").length && $("#relationship").val().trim() === "") {
      Materialize.toast('Please complete entering relationships!', 4000);
    }

    if($("#genre").length && $("#genre").val().trim() === "") {
      Materialize.toast('Please complete entering genres!', 4000);
    }

    if($("#profession").length && $("#profession").val().trim() === "") {
      Materialize.toast('Please complete entering professions!', 4000);
    }

    if($("#verb").length && $("#verb").val().trim() === "") {
      Materialize.toast('Please complete entering verbs!', 4000);
    }

    if($("#verb_ing").length && $("#verb_ing").val().trim() === "") {
      Materialize.toast('Please complete entering verbs ending in "ing"!', 4000);
    }

    if($("#verb_ed").length && $("#verb_ed").val().trim() === "") {
      Materialize.toast('Please complete entering verbs ending in "ed"!', 4000);
    }

    if($("#adjective").length && $("#adjective").val().trim() === "") {
      Materialize.toast('Please complete entering adjectives!', 4000);
    }

    if($("#adverb").length && $("#adverb").val().trim() === "") {
      Materialize.toast('Please complete entering adverbs!', 4000);
    }
}
    