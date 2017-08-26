
$("#submitBtn").on('click', function(){

    if($("#noun").val().trim() === "") {
      Materialize.toast('Please complete entering nouns!', 4000);
    }

    else if($("#plural_noun").val().trim() === "") {
      Materialize.toast('Please complete entering plural nouns!', 4000);
    }

    else if($("#animal").val().trim() === "") {
      Materialize.toast('Please complete entering animals!', 4000);
    }

    else if($("#place").val().trim() === "") {
      Materialize.toast('Please complete entering places!', 4000);
    }

    else if($("#body_part").val().trim() === "") {
      Materialize.toast('Please complete entering body parts!', 4000);
    }

    else if($("#food").val().trim() === "") {
      Materialize.toast('Please complete entering food!', 4000);
    }

    else if($("#person").val().trim() === "") {
      Materialize.toast('Please complete entering persons!', 4000);
    }

    else if($("#number").val().trim() === "") {
      Materialize.toast('Please complete entering numbers!', 4000);
    }

    else if($("#dwelling").val().trim() === "") {
      Materialize.toast('Please complete entering dwellings!', 4000);
    }

    else if($("#firstName").val().trim() === "") {
      Materialize.toast('Please complete entering first names!', 4000);
    }

    else if($("#lastName").val().trim() === "") {
      Materialize.toast('Please complete entering last names!', 4000);
    }

    else if($("#relationship").val().trim() === "") {
      Materialize.toast('Please complete entering relationships!', 4000);
    }

    else if($("#genre").val().trim() === "") {
      Materialize.toast('Please complete entering genres!', 4000);
    }

    else if($("#profession").val().trim() === "") {
      Materialize.toast('Please complete entering professions!', 4000);
    }

    else if($("#verb").val().trim() === "") {
      Materialize.toast('Please complete entering verbs!', 4000);
    }

    else if($("#verb_ing").val().trim() === "") {
      Materialize.toast('Please complete entering verbs ending in "ing"!', 4000);
    }

    else if($("#verb_ed").val().trim() === "") {
      Materialize.toast('Please complete entering verbs ending in "ed"!', 4000);
    }

    else if($("#adjective").val().trim() === "") {
      Materialize.toast('Please complete entering adjectives!', 4000);
    }

    else if($("#adverb").val().trim() === "") {
      Materialize.toast('Please complete entering adverbs!', 4000);
    }
}
    