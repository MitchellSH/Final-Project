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

  
  function chooseQs(){
    var name = $(this).attr('name');
    switch (name){
      case 'jqueryQuiz':
        askQuestion(questions);
    }
  }

  function askQuestion(x){
    var array = x;
    var random = _.shuffle(array);
    for(var i = 0; i < random.length; i++){
      $('#q' + i).text(random[i][0]);
    }

  }

  /* function answerQuestion(){
    var qnum = $(this).data('qnum');
    if($('.answer'+qnum).val()===[qnum][1]){
      alert('right');
    }else{
      alert('wrong');
    }
  }
*/

  function produceTable(){
    $('#tableQuestions').show();
    $('button.tiny.radius').click();
   // $('#start').show();
  }

  function hideItAll(){
    $('#start').hide();
    $('#tableQuestions').hide();
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
    $('#start').show().attr('name','jqueryQuiz').click(chooseQs);
  }
  function htmlMagic(){
    hideItAll();
    $('#search').text('Search HTML/Jade').show().addClass('.searchHTML/Jade');
    $('#quiz').text('Quiz HTML/Jade').show().addClass('.quizHTML/Jade').click(produceTable);
    $('#nameQuiz').text('HTML/Jade Quiz');
    $('#start').show().click(askQuestion(questions));

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

