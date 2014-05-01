(function(){

  'use strict';
  var counter = 0;
  var counter1 = 0;

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
    $('.submit1').attr('name', 'JQ1A1').click(dropDown).removeClass('.submit0').addClass('.disabled');
    $('.submit2').attr('name', 'JQ1A2').click(dropDown);
    $('.submit3').attr('name', 'JQ1A3').click(dropDown);
    $('.submit4').attr('name', 'JQ1A4').click(dropDown);
    $('.submit5').attr('name', 'JQ1A5').click(dropDown);
  }

//---------Global Variables-------------------------------------------->

  var questions = [
    ['efbdegeheghyay','2.moon', '2'],
    ['How many years has Doctor Who been around?','5.potato', '5'],
    ['Which Doctor(number) wears a bow tie?','4.waffle', '4'],
    ['Which Doctor(number) said "Allons-y"?','1.teacup', '1'],
    ['How many moons  does earth have?','3.coffee', '3'],
  ];
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

  function clearDivs(){
    $('.answer0').val('');
    $('.answer1').val('');
    $('.answer2').val('');
    $('.answer3').val('');
    $('.answer4').val('');
    $('.wrongAnswer').empty();
    $('.rightAnswer').empty();
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
  function askQuestion(array){
    for(var i=0; i < array.length; i++){
      $('#q' + i).text(array[i][0]);
    }
  }

  function choices(array){
    var shuffled = _.shuffle(array);
    for(var i=0; i < shuffled.length; i++){
      $('.c' + i).text(shuffled[i][1]);
    }
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
  function answerQuestion(array, index){
    if($('.answer'+index).val()===array[index][2]){
      counter += 1;
      $('.rightAnswer').text(counter);
    }
    else if($('.answer'+index).val()===(' ')){
      alert('Please Enter Answer');
    }
    else{
      counter1 += 1;
      $('.wrongAnswer').text(counter1);
    }
  }

  function dropDown(){
    var name = $(this).attr('name');
    switch (name){
      case 'JQ1':
        askQuestion(questions);
        choices(questions);
        break;
      case 'JQ1A1':
        answerQuestion(questions,0);
        break;
      case 'JQ1A2':
        answerQuestion(questions,1);
        break;
      case 'JQ1A3':
        answerQuestion(questions,2);
        break;
      case 'JQ1A4':
        answerQuestion(questions,3);
        break;
      case 'JQ1A5':
        answerQuestion(questions,4);
        break;
      case 'JQ2':
        askQuestion();
        choices();
        break;
      case 'JQ3':
        askQuestion();
        choices();
        break;
      case 'JQ4':
        askQuestion();
        choices();
        break;
      case 'JQ5':
        askQuestion();
        choices();
        break;
      case 'JQ6':
        askQuestion();
        choices();
        break;
    }
  }
  function jqueryQuiz(){
    $('.Q1').attr('name', 'JQ1').click(dropDown).click(clearDivs);
    $('.Q2').attr('name', 'JQ2').click(clearDivs);
    $('.Q3').attr('name', 'JQ3').click(clearDivs);
    $('.Q4').attr('name', 'JQ4').click(clearDivs);
    $('.Q5').attr('name', 'JQ5').click(clearDivs);
    $('.Q6').attr('name', 'JQ6').click(clearDivs);
  }

  function jqueryMagic(){
    $('#about').hide();
    $('#searchJQ').text('Search Jquery').addClass('.searchJquery').click(showSearchBox).click(hideH4);
    $('#quizJQ').text('Jquery Quiz').addClass('.quizJquery').click(produceTable).click(jqueryQuiz).click(hideH4).attr('name', 'jqueryQuiz');
    $('#linkJQ').click(showSiteLinks).click(hideH4);
    $('#aboutJQ').click(showAboutPage).click(hideH4);
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

