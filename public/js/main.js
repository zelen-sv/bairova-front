$( document ).ready(function() {

  "use strict";

  $('.mobmenu__toggle').on('click', function(){
    $('body').toggleClass('open');
  });

  $('.mobmenu__item').on('click', function(){
    $('body').toggleClass('open');
  });

});
