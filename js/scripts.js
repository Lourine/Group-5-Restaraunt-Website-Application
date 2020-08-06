$(document).ready(function(){
 
 // menu
           
$('#header').click(function () {
  $('.hide').toggle();
  $('.hide' + $(this).attr('target')).toggle();
});
$('#header1').click(function () {
  $('.hide1').toggle();
  $('.hide1' + $(this).attr('target')).toggle();
});
$('#header2').click(function () {
  $('.hide2').toggle();
  $('.hide2' + $(this).attr('target')).toggle();
});
$('#header3').click(function () {
  $('.hide3').toggle();
  $('.hide3' + $(this).attr('target')).toggle();
});
$('#show').click(function () {
  $('#hide').toggle();
  $('#hide' + $(this).attr('target')).toggle();
});

$('#showBtn').click(function() {
  //$('.hideme').hide();  
  if ($(this).hasClass('active')) {    
    $(this).removeClass('active');
    $('.hideme').slideUp();
  } else {
    $('.hideme').slideUp();
    $('#showBtn').removeClass('active');
    $(this).addClass('active');
    $(this).next().filter('.hideme').slideDown();
  }
});

  // Activate Carousel
  $("#myCarousel").carousel({interval: 500});
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});


function logIn() {
  var inputName= document.getElementById("username").value
  var inputPassword= document.getElementById("password").value

  if (inputName ==="" || inputPassword ==="") {
    document.getElementById("alert").innerHTML=("Kindly input all fields")
    event.preventDefault()
  }
  else {
    document.getElementById("alert").innerHTML=("Welcome to Mama's Kitchen")
  }
}
