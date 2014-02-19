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

  /*var questions = [
    ['lkdsajfl', '34'],
    ['lskdfj', '45'],
    ['fdlsakj', '56'],
    ['dfsljad' '56']
  ];*/

  //var random = _.shuffle(questions);

  }
  function produceTable(){
    $('#questions').show();
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
    //$('#newq').click(jqueryQuestion);
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

  //function jqueryQuestion(){
    //for(var i = 0; i < random.length; i++){
      //$('#q' + 1).text(random[i][0]);
    //}
  //}
  /*function jqueryAnswer(){
    var qnum = $(this).data('qnum');
    if($('.answer'+qnum).val()===random[qnum][1]){
      alert('right');
    }else{
      alert('wrong');
    }
  }
*/
})();

