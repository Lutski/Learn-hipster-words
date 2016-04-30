$(document).ready(function() {
  openAnimationPicker();
  getMustacheAnimationNameFromDropdown();
  getRandomWord();
  newWord();
});

// Global variable that determines the mustache animation
var animation = "mustache-up-down"



function getRandomWord() {
  var allPossibilities = hiptionary.length
  var randomNumber = Math.floor((Math.random() * allPossibilities) + 1)

  var word = hiptionary[randomNumber]["name"];
  var meaning = hiptionary[randomNumber]["meaning"];
  var example = hiptionary[randomNumber]["example"];

  $(".word").text(word);
  $(".word-meaning").text(meaning);
}

function getMustacheAnimation() {
  $(".mustache-wrapper").addClass(animation + "-ani");

  $("." + animation + "-ani").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  function(e) {
    // code to execute after animation ends
    $(".mustache-wrapper").removeClass(animation + "-ani");
  });
}

function getMustacheAnimationWithinMustache() {
  $(".mustache-wrapper .mustache").addClass(animation + "-ani");

  $("." + animation + "-ani").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  function(e) {
    // code to execute after animation ends
    $(".mustache-wrapper .mustache").removeClass(animation + "-ani");
  });
}

function getMustacheAnimationNameFromDropdown() {
  $('.animations li').click(function() {
    content = $(this).html();

    // Set global variable 'animation' to new animation
    animation = content

  });
}


function newWord() {
  $(".new-word-btn").click(function() {

    mustacheAloneAnimations = ["mustache-expand", "mustache-kick"];

    if (animation == "mustache-expand" || animation == "mustache-kick") {
      getMustacheAnimationWithinMustache();
    } else {
      getMustacheAnimation();
    }

    // Runs getRandomWord() after 1 second (delays it)
    setTimeout(function() {
      getRandomWord();
    }, 1000);
  });
}




// -------------------- Header --------------------
function openAnimationPicker() {
  $('.animation-btn').click(function() {
    $('.animation-dropdown').fadeToggle('fast');
  });
}
