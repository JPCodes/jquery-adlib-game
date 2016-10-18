$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var inputPerson1 = $("input#person1").val();
    var inputPerson2 = $("input#person2").val();
    var inputAnimal = $("input#animal").val();
    var inputExclamation = $("input#exclamation").val();
    var inputVerb = $("input#verb").val();
    var inputNoun = $("input#noun").val();

    $(".person1").text(inputPerson1);
    $(".person2").text(inputPerson2);
    $(".animal").text(inputAnimal);
    $(".exclamation").text(inputExclamation);
    $(".verb").text(inputVerb);
    $(".noun").text(inputNoun);

    $("#story").show();

    event.preventDefault();
  });


});
