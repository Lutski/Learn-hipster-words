$(document).ready(function() {
  getRandomWord();
  newWord();
});

function getRandomWord() {
  var allPossibilities = hiptionary.length
  var randomNumber = Math.floor((Math.random() * allPossibilities) + 1)

  var word = hiptionary[randomNumber]["name"];
  var meaning = hiptionary[randomNumber]["meaning"];
  var example = hiptionary[randomNumber]["example"];

  $(".word").text(word);
  $(".word-meaning").text(meaning);
}


function mustacheSlideUpDown() {
  $(".mustache-wrapper").addClass("mustache-up-down-ani");

  $(".mustache-up-down-ani").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  function(e) {
    // code to execute after animation ends
    $(".mustache-wrapper").removeClass("mustache-up-down-ani");
  });

}


function newWord() {
  $(".new-word-btn").click(function() {
    mustacheSlideUpDown();

    // Runs getRandomWord() after 1 second (delays it)
    setTimeout(function() {
      getRandomWord();
    }, 1000);
  });
}
