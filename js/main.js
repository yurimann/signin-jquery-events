$(function(){

  $('.signin').on('click', function(){
    $('.modal').fadeIn();
  });

  $('.close').on('click', function(){
    $('.modal').fadeOut();
  });

  $('.submit').on('click', function(){
    $("[name='user']").attr('class', 'error');
    $("[name='pass']").attr('class', 'error');
  });

  $("[name='user']").on('mouseover', function(){
    $("[name='user']").removeAttr("class");
  });

  $("[name='pass']").on('mouseover', function(){
    $("[name='pass']").removeAttr("class");
  });

  $('.modal').on('click', function(eventObject){
    $('.modal').fadeOut();
    eventObject.stopPropagation();
  });
});
