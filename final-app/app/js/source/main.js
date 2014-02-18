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
  function createButton(){
    var test = $('<button>Search</button>');
    var test2 = $('<button>Quiz</button>');

    $('#container').append(test, test2);


  }

  function home(){
    $('#container').empty();
  }
  function jqueryMagic(){

    //$('#jquery').one('click', function(){
      //var test = $('<button>Search</button>');
      //var test2 = $('<button>Quiz</button>');
      //$('#container').append(test, test2);
    //}
    createButton();
  }
  function htmlMagic(){
    createButton();
  }

  function javaMagic(){
    createButton();
  }

  function cssMagic(){
    createButton();
  }

  function lodashMagic(){
    createButton();
  }

  function gitMagic(){
    createButton();
  }


})();

