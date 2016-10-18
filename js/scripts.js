$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var inputPerson1 = $("input#person1").val();
    var inputPerson2 = $("input#person2").val();

    $(".person1").text(inputPerson1);
    $(".person2").text(inputPerson2);
    $(".animal").text("something");
    $(".exclamation").text("something else");
    $(".verb").text("something");
    $(".noun").text("something else");

    $("#story").show();

    event.preventDefault();
  });


});
