$(document).ready(function() {
  $("button#catVote").click(function() {
    $("ul#catPoll").after("<li>Meow!</li>");
    $("ul#dogPoll").after("<li>Grrr!</li>");

  });
  $("button#dogVote").click(function() {
    $("ul#catPoll").after("<li>Rawr!</li>");
    $("ul#dogPoll").after("<li>Woof!</li>");

  });

  $("button#noVote").click(function() {
    $("ul#catPoll").after("<li>Hiss!</li>");
    $("ul#dogPoll").after("<li>Bark!</li>");

  });




});
