$(document).ready(function(){

   $('#title').html('jQuery - School of Net');
   $('#desc').html('Starting with jQuery');

   $('#click').click(function () {
      $(this).html('OK');
   });

   $('#dblclick').dblclick(function () {
      $(this).html('OK');
   });

   $('#mouseenter').mouseenter(function () {
      $(this).html('OK');
   });

   $('#mouseleave').mouseleave(function () {
      $(this).html('OK');
   });

   $('#keypress').keypress(function () {
      $('#eventKey').html('keypress - ' + $(this).val());
   });

   $('#keydown').keydown(function () {
      $('#eventKey').html('keydown - ' + $(this).val());
   });

   $('#keyup').keyup(function () {
      $('#eventKey').html('keyup - ' + $(this).val());
   });

});
