$(document).ready(function() {
  openAnimationPicker();
  getMustacheAnimationNameFromDropdown();
  getRandomWord();
  newWord();

  getWordExample();
  quitWordExample();
});

// Global variable that determines the mustache animation
var animation = "mustache-up-down"

// Global variables for word, meaning and example
var word = "";
var meaning = "";
var example = "";


function getRandomWord() {
  var allPossibilities = hiptionary.length
  var randomNumber = Math.floor((Math.random() * allPossibilities) + 1)

  word = hiptionary[randomNumber]["name"];
  meaning = hiptionary[randomNumber]["meaning"];
  example = hiptionary[randomNumber]["example"];

  $(".word").text(word);
  $(".word-meaning").text(meaning);
  $('.word-example p').text(example);
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


function getWordExample() {
  $('.get-example-btn').click(function() {
    $('.mustache-wrapper .mustache').addClass('example-scale');
    //$('#hipster-word').toggleClass('blurred-body');
    $('.word-example').fadeIn();
  });
}

function quitWordExample() {
  $('.scale-down-btn').click(function() {
    $('.mustache-wrapper .mustache').removeClass('example-scale');
    //$('#hipster-word').toggleClass('blurred-body');
    $('.word-example').fadeOut();
  });
}



// -------------------- Header --------------------
function openAnimationPicker() {
  $('.animation-picker').hover(function() {
    $('.animation-dropdown').fadeToggle('fast');
  });
}
