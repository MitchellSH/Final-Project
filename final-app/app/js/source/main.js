(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#ecode').click(eCode);
    $('#home').click(home);
    $('#jquery').hover(jqueryMagic);
    $('#html-jade').hover(htmlMagic);
    $('#java').hover(javaMagic);
    $('#css').hover(cssMagic);
    $('#lodash').hover(lodashMagic);
    $('#git').hover(gitMagic);
  }

//---------Global Variables-------------------------------------------->
/*
  var questions = [
    ['efbdegeheghyay','moon', '12'],
    ['How many years has Doctor Who been around?','potato', '50'],
    ['Which Doctor(number) wears a bow tie?','waffle', '11'],
    ['Which Doctor(number) said "Allons-y"?','teacup', '10'],
    ['How many moons  does earth have?','coffee', '1'],
    ['How old is Lauren?','google', '22'],
    ['How old is Mitch?','fdsgfdsgfdgsd', '20'],
    ['How many minutes are in a hour?','phone', '60']
  ];*/
//--------------------------------------------------------------------->



//-------Minor Hide and Show Functions------------------->

  function showSearchBox(){
    $('#scroll-box').show();
    $('#search-div').show();
    hideItAll();
    hideSiteLinks();
    hideAboutPage();
  }
  function hideSearchBox(){
    $('#scroll-box').hide();
    $('#search-div').hide();
  }

  function showAboutPage(){
    $('#about-page').show();
    hideSearchBox();
    hideSiteLinks();
    hideItAll();
  }

  function hideAboutPage(){
    $('#about-page').hide();
  }

  function showSiteLinks(){
    $('#site-container').show();
    hideItAll();
    hideSearchBox();
    hideAboutPage();
  }
  
  function hideSiteLinks(){
    $('#site-container').hide();
  }

  function produceTable(){
    $('#tableQuestions').show();
    $('#start').show().text('New Quiz');
    $('#dropdown-quiz').show();
    $('#dov').show();
    $('#score-right').show();
    $('#score-wrong').show();
    hideSearchBox();
    hideSiteLinks();
    hideAboutPage();
  }
  
  function showH4(){
    $('h4').show();
  }

  function hideH4(){
    $('h4').hide();
  }

  function hideItAll(){
    $('#start').hide();
    $('#dropdown-quiz').hide();
    $('#tableQuestions').hide();
    $('#dov').hide();
    $('#score-right').hide();
    $('#score-wrong').hide();

  }
//-------------------------------------------------------->

//-----------Top Nav Bar Functions------------------------>
  
  function eCode(){
      hideH4();
      $('#about').show();
      hideItAll();
      hideSearchBox();
      hideSiteLinks();
      hideAboutPage();
    }

  function home(){
    showH4();
    hideAboutPage();
    hideSiteLinks();
    hideSearchBox();
    $('#about').hide();
    hideItAll();
    $('#header').text('Welcome To E_Code!');
    $('#sub-header').text('Helping You To Learn.');
    $('#sub-header2').text('');
  }
  function dropDown(){
    var name = $(this).attr('name');
    switch (name){
      case 'jqueryQuiz':
        $('li').removeClass('Q1').addClass('JQ1');
        /*$('li').removeClass('Q2').addClass('JQ2');
        $('li').removeClass('Q3').addClass('JQ3');
        $('li').removeClass('Q4').addClass('JQ4');
        $('li').removeClass('Q5').addClass('JQ5');
        $('li').removeClass('Q6').addClass('JQ6');
        */
        break;
    }

  }
  function jqueryMagic(){
    $('#about').hide();
    $('#searchJQ').text('Search Jquery').addClass('.searchJquery').click(showSearchBox).click(hideH4);
    $('#quizJQ').text('Jquery Quiz').addClass('.quizJquery').click(produceTable).click(hideH4).attr('name', 'jqueryQuiz').click(dropDown);
    $('#linkJQ').click(showSiteLinks).click(hideH4);
    $('#aboutJQ').click(showAboutPage).click(hideH4);
    $('.submit1').attr('name', 'jqueryAnswer1').click();
    $('.submit2').attr('name', 'jqueryAnswer2').click();
    $('.submit3').attr('name', 'jqueryAnswer3').click();
    $('.submit4').attr('name', 'jqueryAnswer4').click();
  }
  function htmlMagic(){
    $('#about').hide();
    $('#searchHJ').text('Search HTML/Jade').addClass('.searchHTML/Jade').click(showSearchBox).click(hideH4);
    $('#quizHJ').text('HTML/Jade Quiz').addClass('.quizHTML/Jade').click(produceTable).click(hideH4);
    $('#linkHJ').click(showSiteLinks).click(hideH4);
    $('#aboutHJ').click(showAboutPage).click(hideH4);

  }
  function javaMagic(){
    $('#about').hide();
    $('#searchJS').text('Search Javascript').addClass('.searchJavascript').click(showSearchBox).click(hideH4);
    $('#quizJS').text('Javascript Quiz').addClass('.quizJavascript').click(produceTable).click(hideH4);
    $('#linkJS').click(showSiteLinks).click(hideH4);
    $('#aboutJS').click(showAboutPage).click(hideH4);
  }

  function cssMagic(){
    $('#about').hide();
    $('#searchCSS').text('Search CSS').addClass('.searchCSS').click(showSearchBox).click(hideH4);
    $('#quizCSS').text('CSS Quiz').addClass('.quizCSS').click(produceTable).click(hideH4);
    $('#linkCSS').click(showSiteLinks).click(hideH4);
    $('#aboutCSS').click(showAboutPage).click(hideH4);

  }

  function lodashMagic(){
    $('#about').hide();
    $('#searchLD').text('Search LoDash').addClass('.searchLoDash').click(showSearchBox).click(hideH4);
    $('#quizLD').text('LoDash Quiz').addClass('.quizLoDash').click(produceTable).click(hideH4);
    $('#linkLD').click(showSiteLinks).click(hideH4);
    $('#aboutLD').click(showAboutPage).click(hideH4);
  }

  function gitMagic(){
    $('#about').hide();
    $('#searchG').text('Search Git').addClass('.searchGit').click(showSearchBox).click(hideH4);
    $('#quizG').text('Git Quiz').addClass('.quizGit').click(produceTable).click(hideH4);
    $('#linkG').click(showSiteLinks).click(hideH4);
    $('#aboutG').click(showAboutPage).click(hideH4);
  }
//------------------------------------------------------------------>

//----------The Flip Effect For The "about us" Avatars-------------->
  $('.front').click(function(){
    if(!$(this).hasClass('flipped')){
      $(this).flip({
        direction:'lr',
      }).addClass('flipped');
      $(this).children('.back').removeClass('hidden');
      $(this).children('img').addClass('hidden');
    } else {
      $(this).flip({
          direction:'rl',
        }).removeClass('flipped');
      $(this).children('.back').addClass('hidden');
      $(this).children('img').removeClass('hidden');
    }
  });

  //---------------------------------------------------------------->


})();

