(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#ecode').click(eCode);
    $('#home').click(home);
    $('#jquery').click(jqueryMagic);
    $('#html-jade').click(htmlMagic);
    $('#java').click(javaMagic);
    $('#css').click(cssMagic);
    $('#lodash').click(lodashMagic);
    $('#git').click(gitMagic);
    //$(document).on('click', '.back', flipBack);
  }
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

 /* var questions2 = [
    ['How many pigs are there?', '12'],
    ['How many years has piggy Who been around?', '50'],
    ['Which Doctor(number) wears a pig tie?', '11'],
    ['Which Doctor(number) said "Allons-pig"?', '10'],
    ['How many pigs does earth have?', '1'],
    ['How old is Pig?', '22'],
    ['How old is Piggie?', '20'],
    ['How many pigs are in a hour?', '60']
  ];*/

  function eCode(){
      $('#orbit').hide();
      $('#about').show();
      hideItAll();
      hideWelcome();

    }


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

  function hideWelcome(){
    $('#welcome').hide();
  }

  function hideBlocks(){
    $('#orbit').hide();
  }

  function produceTable(){
    $('#tableQuestions').show();
    $('#start').show().text('New Quiz');
  }

  function hideItAll(){
    $('#start').hide();
    $('#tableQuestions').hide();
  }
  function home(){
    $('#orbit').show();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#header').text('Welcome To E_Code!');
    $('#sub-header').text('Helping You To Learn.');
    $('#sub-header2').text('');
  }
  function jqueryMagic(){
    hideBlocks();
    $('#about').hide();
    $('#welcome').show();
    hideItAll();
    $('#searchJQ').text('Search Jquery').show().addClass('.searchJquery');
    $('#quizJQ').text('Quiz Jquery').show().addClass('.quizJquery').click(produceTable).attr('name', 'jqueryQuiz');
    $('#start').attr('name','jqueryQuiz').click(routeArrays);
    $('#nameQuiz').text('Jquery Quiz');
    $('#header').text('Jquery');
    $('#sub-header').text('Jquery simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.');
    $('#sub-header2').text('');
    $('.submit1').attr('name', 'jqueryAnswer1').click(routeArrays);
    $('.submit2').attr('name', 'jqueryAnswer2').click(routeArrays);
    $('.submit3').attr('name', 'jqueryAnswer3').click(routeArrays);
    $('.submit4').attr('name', 'jqueryAnswer4').click(routeArrays);
  }
  function htmlMagic(){
    hideBlocks();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchHJ').text('Search HTML/Jade').show().addClass('.searchHTML/Jade');
    $('#quizHJ').text('Quiz HTML/Jade').show().addClass('.quizHTML/Jade').click(produceTable);
    $('#nameQuiz').text('HTML/Jade Quiz');
    $('#header').text('HTML/JADE');
    $('#sub-header').text('HTML is the unversal markup language for the Web.');
    $('#sub-header2').text('HTML lets you format text, graphics, links, inputs, etc. and save it all in a text file that will display in your browser.');

  }

  function javaMagic(){
    hideBlocks();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchJS').text('Search Javascript').show().addClass('.searchJavascript');
    $('#quizJS').text('Quiz Javascript').show().addClass('.quizJavascript').click(produceTable);
    $('#nameQuiz').text('Java Quiz');
    $('#header').text('Javascript');
    $('#sub-header').text('JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.');
    $('#sub-header2').text('');
  }

  function cssMagic(){
    hideBlocks();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchCSS').text('Search CSS').show().addClass('.searchCSS');
    $('#quizCSS').text('Quiz CSS').show().addClass('.quizCSS').click(produceTable);
    $('#nameQuiz').text('CSS Quiz');
    $('#header').text('CSS');
    $('#sub-header').text('The styling and design of your HTML.');
    $('#sub-header2').text('');

  }

  function lodashMagic(){
    hideBlocks();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchLD').text('Search LoDash').show().addClass('.searchLoDash');
    $('#quizLD').text('Quiz LoDash').show().addClass('.quizLoDash').click(produceTable);
    $('#nameQuiz').text('LoDash Quiz');
    $('#header').text('Lo-Dash');
    $('#sub-header').text('A utility library delivering consistency, customization, performance, & extras.');
    $('#sub-header2').text('');
  }

  function gitMagic(){
    hideBlocks();
    $('#welcome').show();
    $('#about').hide();
    hideItAll();
    $('#searchG').text('Search Git').show().addClass('.searchGit');
    $('#quizG').text('Quiz Git').show().addClass('.quizGit').click(produceTable);
    $('#nameQuiz').text('Git Quiz');
    $('#header').text('Git');
    $('#sub-header').text('In software development, Git is a distributed revision control and source code management (SCM) system with an emphasis on speed.');
    $('#sub-header2').text('');
  }

  $('.front').click(function(){
    if(!$(this).hasClass('flipped')){
      $(this).flip({
        direction:'lr',
      }).addClass('flipped');
      $(this).children('.back').removeClass('hidden');
      $(this).children('img').addClass('hidden');
    } else {
      $(this).flipBack();
    }
  });

 /* function flipBack(){
    debugger;
    //$('.front').revertFlip();
    $('#zim').removeClass('hidden');
    $('#bbg').removeClass('hidden');
  }*/

})();

