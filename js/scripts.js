$(document).ready(function(){
  $('.header').height($(window).height());




  $('.overlay').mouseover(function(){
    $(this).css('background-color', "#6FCF97")
  });
  $('.overlay').mouseout(function(){
    $(this).css('background-color', "white")
  });

  $('.fadeFromLeft').animate({'left': "0px"}, 1500);
  $('.fadeFromRight').animate({'right': "0px"}, 1500);
})
