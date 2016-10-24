$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var blankIds = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blankIds.forEach(function(blankId) {
      var userInput = $("input#" + blankId).val();
      $("." + blankId).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
    });
});
