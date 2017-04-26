$(document).ready(function(){

   $('#title').html('jQuery - School of Net');
   //$('#title').hide();

   $('#desc').html('Starting with jQuery');

   //$('header').hide();
   //$('header').html('Text ...');
   //$('header').html('<h1>Title H1</h1>');

    $('h1').css('color','red');

    $('button').click(function(){
       $(this).css('color', 'red');
    });

});
