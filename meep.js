// start screen text animation

var text = document.getElementById("text");
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

// game code

var choice1;
var choice2;
var ending;
var node = "zero";
var endingMayor = false;
var endingWeather = false;
var endingStream = false;
var endingEvicted = false;

//start

$('.startText').on('click', function() {
  node = "asleep";
  $('#text').fadeOut();
  $(this).fadeOut();
  $('.startGradient').animate({
    top: '-2060px'
  },1400)
  setTimeout(shoobSleepIn, 300)
});


//choices setup

$('.choice1 .choiceText, .cloud img').on('click',function(){
  switch (node) {
    case "asleep":
      choicesFadeOut();
      shoobSleepOut();
      break;
    case "awake":
      shoobAwakeOut('jorb');
      break;
    case "jorb":
      shoobJorbOut('cloud');
      break;
    case "cloud":
      shoobCloudOut();
      break;
    case "pencil":
      shoobPencilOut();
      break;
    case "snoozle":
      shoobSnoozleOut('email');
      break;
    case "email":
      shoobEmailOut();
      break;
    case "superSnoozle":
      shoobSuperSnoozleOut();
      break;
    case "evicted":
      epilogue('evicted');
      break;
    case "stream":
      epilogue('stream');
      break;
    case "mayor":
      epilogue('mayor');
      break;
    case "weather":
      epilogue('weather');
      break;
    case "theEnd":
      playAgain();
      break;
  }
})

$('.choice2 .choiceText, .pencil img').on('click',function(){
  switch (node) {
    case "asleep":
      shoobSleepOut();
      break;
    case "awake":
      shoobAwakeOut('snoozle');
      break;
    case "jorb":
      shoobJorbOut('pencil');
      break;
    case "snoozle":
      shoobSnoozleOut('superSnoozle');
      break;
  }
})

function setChoices(){
  $('.choice1 .choiceText').html(choice1);
  $('.choice2 .choiceText').html(choice2);
}

function choicesFadeIn() {
  $('.choice1, .choice2').css('display','flex');
  setTimeout(function() {
    $('.choice1').addClass('choiceActive');
  },800);
  setTimeout(function() {
    $('.choice2').addClass('choiceActive');
  },1100);
}

function choicesFadeOut() {
  $('.choice1, .choice2').removeClass('choiceActive');
  setTimeout(function(){
    $('.choice1, .choice2').css('display','none');
  }, 1000);
}

function choice1FadeIn() {
  $('.choice1').css('display','flex');
  $('.choice2').css('display','none');
  setTimeout(function() {
    $('.choice1').addClass('choiceActive');
  },1000);
}

$('.dismiss').click(function() {
  $('.paper').removeClass('paperActive');
})

//level 1

function shoobSleepIn() {
  choice1 = "goob morning";
  choice2 = "henlo";
  $('.shoobSleep').show();
  $('.shoobSleep').addClass('shoobSleepAnimIn');
  $('.shoobSleepGif').show();
  setChoices();
  setTimeout(function() {
    choice1FadeIn();
  }, 3800);
}

function shoobSleepInAgain() {
  choice1 = "goob morning";
  // choice2 = "henlo";
  // choice2 = "goob morning";
  $('.shoobSleep').show();
  $('.shoobSleep').addClass('shoobAnimIn');
  $('.shoobSleepGif').show();
  setTimeout(setChoices, 500);
  setTimeout(function() {
    choice1FadeIn();
  }, 1000);
}

function shoobSleepOut() {
  node = "awake";
  choicesFadeOut();
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    shoobAwakeIn();
  },800);
}

//level 2

function shoobAwakeIn() {
  choice1 = "hecc, gotta get a jorb";
  choice2 = "snoozle 5 more minutes";
  setChoices();
  $('.shoobAwake').show();
  $('.shoobSleep').hide();
  $('.shoobAwake').addClass('shoobAnimIn');
  // $('.shoobAwakeGif').show();
  setTimeout(huhIn,1200);

  function huhIn() {
    $('.shoobAwake').css({
      'background': 'url(img/shoob_awake_huh.jpg) center center no-repeat',
      'background-size': 'cover'
    });
    // $('.shoobAwakeGif').hide();
    $('.shoobHuhGif').show();
    setTimeout(paperIn, 2000);
  }
  function paperIn() {
    $('.paper').addClass('paperActive');
    setTimeout(function() {
      choicesFadeIn();
    },500);
  }
}

function shoobAwakeOut(choice) {
  node = choice;
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    if (node == "jorb") {
      shoobJorbIn();
    } else {
      shoobSnoozleIn();
    }
  },1500);
}

//level 3

function shoobJorbIn() {
  choice1 = "shock puff";
  choice2 = "fancy stick";
  setChoices();
  $('.shoobJorb').show();
  choicesFadeIn();
  $('.shoobAwake').hide();
  $('.shoobJorb').addClass('shoobAnimIn');
}

function shoobJorbOut(choice) {
  node = choice;
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    if (node == "cloud") {
      shoobCloudIn();
    } else {
      shoobPencilIn();
    }
  },1500);
}

function shoobSnoozleIn() {
  choice1 = "time to check email";
  choice2 = "more snoozle won't hurt";
  setChoices();
  $('.shoobAwake').css({
    'background': 'url(img/shoob_awake.jpg) center center no-repeat',
    'background-size': 'cover'
  });
  $('.shoobSnoozle').show();
  choicesFadeIn();
  $('.shoobAwake').hide();
  $('.shoobSnoozle').addClass('shoobAnimIn');
}

function shoobSnoozleOut(choice) {
  node = choice;
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
      $('.transitionGradient').removeClass('transitionActive');
    if (node == "email") {
      shoobEmailIn();
    } else {
      shoobSuperSnoozleIn();
    }
  },1500);
}

//level 4

function shoobCloudIn() {
  choice1 = "henlo, may i have a jorb";
  setChoices();
  $('.shoobCloud').show();
  choice1FadeIn();
  $('.shoobJorb').hide();
  $('.shoobCloud').addClass('shoobAnimIn');
}

function shoobCloudOut() {
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    shoobWeatherDog();
  },1500);
}

function shoobPencilIn() {
  choice1 = "any jorbs for doggo?";
  setChoices();
  $('.shoobPencil').show();
  choice1FadeIn();
  $('.shoobJorb').hide();
  $('.shoobPencil').addClass('shoobAnimIn');
}

function shoobPencilOut() {
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    shoobMayor();
  },1500);
}

function shoobSuperSnoozleIn() {
  choice1 = "hecc! what time is??";
  setChoices();
  $('.shoobSuperSnoozle').show();
  choice1FadeIn();
  $('.shoobSnoozle').hide();
  $('.shoobSuperSnoozle').addClass('shoobAnimIn');
}

function shoobSuperSnoozleOut() {
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    shoobEvicted();
  },1500);
}

function shoobEmailIn() {
  choice1 = "accept offer";
  setChoices();
  $('.shoobEmail').show();
  setTimeout(choice1FadeIn, 2000);
  $('.shoobSnoozle').hide();
  $('.shoobEmail').addClass('shoobAnimIn');
}

function shoobEmailOut() {
  $('.transitionGradient').addClass('transitionActive');
  choicesFadeOut();
  setTimeout(function() {
    $('.transitionGradient').removeClass('transitionActive');
    shoobStream();
  },1500);
}

//level 5

function shoobWeatherDog() {
  choice1 = "neato";
  node = 'weather';
  ending = node;
  setChoices();
  $('.shoobWeatherDog').show();
  setTimeout(choice1FadeIn, 500);
  $('.shoobCloud').hide();
  $('.shoobWeatherDog').addClass('shoobAnimIn');
}

function shoobMayor() {
  choice1 = "wow wow wow";
  node = 'mayor';
  ending = node;
  setChoices();
  $('.shoobMayor').show();
  setTimeout(choice1FadeIn, 500);
  $('.shoobPencil').hide();
  $('.shoobMayor').addClass('shoobAnimIn');
}

function shoobEvicted() {
  choice1 = 'awww dang...';
  node = 'evicted';
  ending = node;
  setChoices();
  $('.shoobEvicted').show();
  setTimeout(choice1FadeIn, 500);
  $('.shoobSuperSnoozle').hide();
  $('.shoobEvicted').addClass('shoobAnimIn');
}

function shoobStream() {
  choice1 = "cool";
  node = 'stream';
  ending = node;
  setChoices();
  $('.shoobStream').show();
  setTimeout(choice1FadeIn, 500);
  $('.shoobEmail').hide();
  $('.shoobStream').addClass('shoobAnimIn');
}

function setJobMedals() {
  if (endingMayor) {
    $('.mayorMedal').css({
      'background':'url("img/mayor_medal_inactive.png")',
      'background-size':'cover'
    });
    } else {
    $('.mayorMedal').css({
      'background':'url("img/mayor_medal_unknown.png")',
      'background-size':'cover'
    });
  }

  if (endingWeather) {
    $('.weatherMedal').css({
      'background':'url("img/weather_medal_inactive.png")',
      'background-size':'cover'
    });
    } else {
    $('.weatherMedal').css({
      'background':'url("img/weather_medal_unknown.png")',
      'background-size':'cover'
    });
  }

  if (endingStream) {
    $('.streamerMedal').css({
      'background':'url("img/stream_medal_inactive.png")',
      'background-size':'cover'
    });
    } else {
    $('.streamerMedal').css({
      'background':'url("img/stream_medal_unknown.png")',
      'background-size':'cover'
    });
  }

  if (endingEvicted) {
    $('.evictedMedal').css({
      'background':'url("img/evicted_medal_inactive.png")',
      'background-size':'cover'
    });
    } else {
    $('.evictedMedal').css({
      'background':'url("img/evicted_medal_unknown.png")',
      'background-size':'cover'
    });
  }
}

function epilogue(ending) {
  node = "theEnd";
  setJobMedals();
  $('.choice1').hide().removeClass('choiceActive');
  setTimeout(function() {
    choice1 = "play again?"
    setChoices();
    $('.choice1').fadeIn(400).addClass('choiceActive');
    $('.choice1 .choiceText').addClass('ending');
  },2000);

  switch (ending) {
    case "mayor":
      endingMayor = true;
      activeEnding = "mayor";
      $('.jobTitleText').html('Mayor');
      $('.jobBodyText').html('You went to town hall for a job and the people loved you so much they made you the mayor. Your first act as the top dog was to abolish rent collection by anyone named Bront. \<br> Take that, Bront.');
      break;
    case "weather":
      endingWeather = true;
      activeEnding = "weather";
      $('.jobTitleText').html('Weather doggo');
      $('.jobBodyText').html('Walking into the WTHR station with a perfect toy like that? Of course you got the jorb. Every day you report a 5 day forcast of sunny skies. You’re not always right but it’s good.  \<br> Also Bront burns easily and hates the sun.');
      break;
    case "stream":
      endingStream = true;
      activeEnding = "stream";
      $('.jobTitleText').html('Internet famous');
      $('.jobBodyText').html('Wow. Turns out that email wasn’t a scam and you really did get super rich and famous. People love you even though you\'re not very good at Tetris. \<br> Bront follows you on Twitter now. You don’t follow back.');
      break;
    case "evicted":
      endingEvicted = true;
      activeEnding = "evicted";
      $('.jobTitleText').html('In the dog house');
      $('.jobBodyText').html('Too many snoozles, got bamboozled.\<br> No jorb, no rent, Bront wins this one. Maybe you should play again.');
      break;
  }

  $('.epilogueScreenWrapper').fadeIn(500);

  setTimeout(function() {
    if (activeEnding == "mayor") {
      $('.mayorMedal img').addClass('medalActive');
    } else if (activeEnding == "weather") {
      $('.weatherMedal img').addClass('medalActive');
    } else if (activeEnding == "stream") {
      $('.streamerMedal img').addClass('medalActive');
    } else {
      $('.evictedMedal img').addClass('medalActive');
    }
  }, 500);
}

function playAgain() {
    node="asleep";
    $('.epilogueScreenWrapper').fadeOut(300);
    $('.gameScreen').removeClass('shoobAnimIn');
    $('.paper').removeClass('paperActive');
    $('.gameScreen').hide();
    $('.mayorMedal').removeClass('medalActive');
    $('.weatherMedal').removeClass('medalActive');
    $('.streamerMedal').removeClass('medalActive');
    $('.evictedMedal').removeClass('medalActive');
    choicesFadeOut();
    shoobSleepInAgain();
}
