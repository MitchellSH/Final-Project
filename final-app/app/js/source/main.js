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


  var questions = [
    ['How many Doctors are there?', '12'],
    ['How many years has Doctor Who been around?', '50'],
    ['Which Doctor(number) wears a bow tie?', '11'],
    ['Which Doctor(number) said "Allons-y"?', '10'],
    ['How many moons does earth have?', '1'],
    ['How old is Lauren?', '22'],
    ['How old is Mitch?', '20'],
    ['How many minutes are in a hour?', '60']
  ];
  
  var random = _.shuffle(questions);

  function askQuestion(){
    for(var i = 0; i < random.length; i++){
      $('#q' + i).text(random[i][0]);
    }

  }

  function answerQuestion(){
    var qnum = $(this).data('qnum');
    if($('.answer'+qnum).val()===random[qnum][1]){
      alert('right');
    }else{
      alert('wrong');
    }
  }

  function newQuestion(){
    for(var i = 0; i < random.length; i++){
      $('#q' + i).empty();
    }
  }

  function produceTable(){
    $('#questions').show();
    $('#quizB').show().click(askQuestion);
    $('#newq').show().click(newQuestion);
    $('button.tiny.radius').click(answerQuestion);
  }

  function hideItAll(){
    $('#quizB').hide();
    $('#newq').hide();
    $('#questions').hide();
  }
  function home(){
    hideItAll();
    $('#search').hide();
    $('#quiz').hide();
  }
  function jqueryMagic(){
    hideItAll();
    $('#search').text('Search Jquery').show().addClass('.searchJquery');
    $('#quiz').text('Quiz Jquery').show().addClass('.quizJquery').click(produceTable);
    $('#nameQuiz').text('Jquery Quiz');
  }
  function htmlMagic(){
    hideItAll();
    $('#search').text('Search HTML/Jade').show().addClass('.searchHTML/Jade');
    $('#quiz').text('Quiz HTML/Jade').show().addClass('.quizHTML/Jade').click(produceTable);
    $('#nameQuiz').text('HTML/Jade Quiz');

  }

  function javaMagic(){
    hideItAll();
    $('#search').text('Search Javascript').show().addClass('.searchJavascript');
    $('#quiz').text('Quiz Javascript').show().addClass('.quizJavascript').click(produceTable);
    $('#nameQuiz').text('Java Quiz');
  }

  function cssMagic(){
    hideItAll();
    $('#search').text('Search CSS').show().addClass('.searchCSS');
    $('#quiz').text('Quiz CSS').show().addClass('.quizCSS').click(produceTable);
    $('#nameQuiz').text('CSS Quiz');

  }

  function lodashMagic(){
    hideItAll();
    $('#search').text('Search LoDash').show().addClass('.searchLoDash');
    $('#quiz').text('Quiz LoDash').show().addClass('.quizLoDash').click(produceTable);
    $('#nameQuiz').text('LoDash Quiz');
  }

  function gitMagic(){
    hideItAll();
    $('#search').text('Search Git').show().addClass('.searchGit');
    $('#quiz').text('Quiz Git').show().addClass('.quizGit').click(produceTable);
    $('#nameQuiz').text('Git Quiz');
  }

})();

