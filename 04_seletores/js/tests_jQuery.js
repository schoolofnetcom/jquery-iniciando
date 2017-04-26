$(document).ready(function(){

   $('#title').html('jQuery - School of Net');
   $('#desc').html('Starting with jQuery');

   var bird = $('#bird').html();
   $('#bird').html(bird + " in the sky");

   $('.classBird').css('color', 'orange');
   $('.classBird:first').css('color', 'red');
   $('.classBird:last').css('color', 'blue');
   $('div').html('Selector DIV');

});
