$(document).ready(function(){
  $('.header').height($(window).height());




  $('.overlay').mouseover(function(){
    $(this).css('background-color', "#F9F8F8")
  });
  $('.overlay').mouseout(function(){
    $(this).css('background-color', "white")
  });

  $('.fadeFromLeft').animate({'left': "0px"}, 1500);
  $('.fadeFromRight').animate({'right': "0px"}, 1500);
})
