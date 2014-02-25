(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#home').click(home);
    $('#jquery').click(jqueryMagic);
    $('#html-jade').click(htmlMagic);
    $('#java').click(javaMagic);
    $('#css').click(cssMagic);
    $('#lodash').click(lodashMagic);
    $('#git').click(gitMagic);
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

  function produceTable(){
    $('#tableQuestions').show();
    $('#start').show().text('New Quiz');
  }

  function hideItAll(){
    $('#start').hide();
    $('#tableQuestions').hide();
  }
  function home(){
    hideItAll();
    $('#welcome').show();
    $('#search').hide();
    $('#quiz').hide();
  }
  function jqueryMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search Jquery').show().addClass('.searchJquery');
    $('#quiz').text('Quiz Jquery').show().addClass('.quizJquery').click(produceTable).attr('name', 'jqueryQuiz');
    $('#start').attr('name','jqueryQuiz').click(routeArrays);
    $('#nameQuiz').text('Jquery Quiz');
    $('.submit1').attr('name', 'jqueryAnswer1').click(routeArrays);
    $('.submit2').attr('name', 'jqueryAnswer2').click(routeArrays);
    $('.submit3').attr('name', 'jqueryAnswer3').click(routeArrays);
    $('.submit4').attr('name', 'jqueryAnswer4').click(routeArrays);
  }
  function htmlMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search HTML/Jade').show().addClass('.searchHTML/Jade');
    $('#quiz').text('Quiz HTML/Jade').show().addClass('.quizHTML/Jade').click(produceTable);
    $('#nameQuiz').text('HTML/Jade Quiz');
    //$('#start').show().click(askQuestion(questions));

  }

  function javaMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search Javascript').show().addClass('.searchJavascript');
    $('#quiz').text('Quiz Javascript').show().addClass('.quizJavascript').click(produceTable);
    $('#nameQuiz').text('Java Quiz');
  }

  function cssMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search CSS').show().addClass('.searchCSS');
    $('#quiz').text('Quiz CSS').show().addClass('.quizCSS').click(produceTable);
    $('#nameQuiz').text('CSS Quiz');

  }

  function lodashMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search LoDash').show().addClass('.searchLoDash');
    $('#quiz').text('Quiz LoDash').show().addClass('.quizLoDash').click(produceTable);
    $('#nameQuiz').text('LoDash Quiz');
  }

  function gitMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search Git').show().addClass('.searchGit');
    $('#quiz').text('Quiz Git').show().addClass('.quizGit').click(produceTable);
    $('#nameQuiz').text('Git Quiz');
  }

})();

