var indexValue = 0;
      function slideShow(){
        setTimeout(slideShow, 2500);
        var x;
        const img = document.querySelectorAll("img");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }
      slideShow();


      //menu
           
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