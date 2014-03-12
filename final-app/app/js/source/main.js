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
  var answers = [];

  var questions = [
    ['flkdsajdlka;dfldsfaj', '12'],
    ['How many years has Doctor Who been around?', '50'],
    ['Which Doctor(number) wears a bow tie?', '11'],
    ['Which Doctor(number) said "Allons-y"?', '10'],
    ['How many moons does earth have?', '1'],
    ['How old is Lauren?', '22'],
    ['How old is Mitch?', '20'],
    ['How many minutes are in a hour?', '60']
  ];
//--------------------------------------------------------------------->


//-----Shuffling The Questions and Answers Of The Table---------------->
  function routeArrays(){
    var name = $(this).attr('name');
    switch (name){
      case 'jqueryAnswer1':
        answerQuestion(answers, 0);
        break;
      case 'jqueryAnswer2':
        answerQuestion(answers, 1);
        break;
      case 'jqueryAnswer3':
        answerQuestion(answers, 2);
        break;
      case 'jqueryAnswer4':
        answerQuestion(answers, 3);
        break;
      case 'jqueryQuiz':
        askQuestion(questions);
    }
  }

  function askQuestion(passedInArray){
    var array = _.shuffle(passedInArray);
    for(var i = 0; i < array.length; i++){
      $('#q' + i).text(array[i][0]);
      answers.push(array[i][1]);
    }
  }

  function answerQuestion(newArray, index){
    if($('.answer' + index).val()===newArray[index]){
      alert('right');
    }
    else if($('.answer' + index).val()===('')){
      alert('please answer question');
    }
    else
    {
      alert('wrong');
    }
  }
//------------------------------------------------------->

//-------Minor Hide and Show Functions------------------->

  function showSearchBox(){
    $('#scroll-box').show();
    $('#search-div').show();
    hideItAll();
    hideWelcome();
    hideSiteLinks();
  }
  function hideSearchBox(){
    $('#scroll-box').hide();
    $('#search-div').hide();
  }

  function showSiteLinks(){
    $('#site-container').show();
    hideItAll();
    hideWelcome();
    hideSearchBox();
  }
  
  function hideSiteLinks(){
    $('#site-container').hide();
  }

  function hideWelcome(){
    $('#welcome').hide();
  }


  function produceTable(){
    $('#tableQuestions').show();
    $('#start').show().text('New Quiz');
    hideSearchBox();
    hideWelcome();
    hideSiteLinks();
  }
  
  function showH4(){
    $('h4').show();
  }

  function hideH4(){
    $('h4').hide();
  }

  function hideItAll(){
    $('#start').hide();
    $('#tableQuestions').hide();
  }
//-------------------------------------------------------->

//-----------Top Nav Bar Functions------------------------>
  
  function eCode(){
      //$('#orbit').hide();
      hideH4();
      $('#about').show();
      hideItAll();
      hideWelcome();
      hideSearchBox();
      hideSiteLinks();
    }

  function home(){
    showH4();
    hideSearchBox();
    hideSiteLinks();
    //$('#orbit').show();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#header').text('Welcome To E_Code!');
    $('#sub-header').text('Helping You To Learn.');
    $('#sub-header2').text('');
  }
  function jqueryMagic(){
    hideH4();
    hideSiteLinks();
    hideSearchBox();
    $('#about').hide();
    $('#welcome').show();
    hideItAll();
    $('#searchJQ').text('Search Jquery').addClass('.searchJquery').click(showSearchBox);
    $('#quizJQ').text('Quiz Jquery').addClass('.quizJquery').click(produceTable).attr('name', 'jqueryQuiz');
    $('#linkJQ').click(showSiteLinks);
    $('#start').attr('name','jqueryQuiz').click(routeArrays);
    $('#nameQuiz').text('Jquery Quiz');
    $('.submit1').attr('name', 'jqueryAnswer1').click(routeArrays);
    $('.submit2').attr('name', 'jqueryAnswer2').click(routeArrays);
    $('.submit3').attr('name', 'jqueryAnswer3').click(routeArrays);
    $('.submit4').attr('name', 'jqueryAnswer4').click(routeArrays);
  }
  function htmlMagic(){
    hideH4();
    hideSiteLinks();
    hideSearchBox();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchHJ').text('Search HTML/Jade').addClass('.searchHTML/Jade').click(showSearchBox);
    $('#quizHJ').text('Quiz HTML/Jade').addClass('.quizHTML/Jade').click(produceTable);
    $('#linkHJ').click(showSiteLinks);
    $('#nameQuiz').text('HTML/Jade Quiz');

  }
  function javaMagic(){
    hideSiteLinks();
    hideH4();
    hideSearchBox();
    //hideBlocks();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchJS').text('Search Javascript').addClass('.searchJavascript').click(showSearchBox);
    $('#quizJS').text('Quiz Javascript').addClass('.quizJavascript').click(produceTable);
    $('#linkJS').click(showSiteLinks);
    $('#nameQuiz').text('Java Quiz');
  }

  function cssMagic(){
    hideSiteLinks();
    hideH4();
    hideSearchBox();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchCSS').text('Search CSS').addClass('.searchCSS').click(showSearchBox);
    $('#quizCSS').text('Quiz CSS').addClass('.quizCSS').click(produceTable);
    $('#linkCSS').click(showSiteLinks);
    $('#nameQuiz').text('CSS Quiz');

  }

  function lodashMagic(){
    hideSiteLinks();
    hideH4();
    hideSearchBox();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchLD').text('Search LoDash').addClass('.searchLoDash').click(showSearchBox);
    $('#quizLD').text('Quiz LoDash').addClass('.quizLoDash').click(produceTable);
    $('#linkLD').click(showSiteLinks);
    $('#nameQuiz').text('LoDash Quiz');
  }

  function gitMagic(){
    hideSiteLinks();
    hideH4();
    hideSearchBox();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchG').text('Search Git').addClass('.searchGit').click(showSearchBox);
    $('#quizG').text('Quiz Git').addClass('.quizGit').click(produceTable);
    $('#linkG').click(showSiteLinks);
    $('#nameQuiz').text('Git Quiz');
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

