//Event that happens when the page finishes loading
$(document).ready(function(){

  var isBig = false;

  //jQuery version of "onClick"
  $('h1').click(function(){
    //if it's big, shrink it
    if(isBig){
        $('h1').css('font-size', '32px');
        isBig = false;
    }
    //if it's small, grow it
    else {
        $('h1').css('font-size', '100px');
        isBig = true;
    }

  });

}); // close $(document).ready()


$(document).ready(function (){

  var images = [
    'https://media.giphy.com/media/3o6Zt89rtZhjmJdV96/giphy.gif',
    'https://media.giphy.com/media/3o72FkJkNiRpAHN2Y8/giphy.gif',
    'https://media.giphy.com/media/3o7TKxKwi6eaoqaFY4/giphy.gif',
    'https://media.giphy.com/media/xT1XGwp3lMHLBTNvFe/giphy.gif'
  ];

  //start at the first image (index 0)
  var currentIndex = 0;

  $('.switch-button').click(function (){
    currentIndex += 1;
    //switch to the next image
    if(currentIndex === images.length){
    currentIndex = 0;
    }
    //change the <img> tag's "src" to the new image
    $('.changable-image').attr('src', images[currentIndex]);
  });

});

$(document).ready(function (){
  var popularity = 0;

  $('.upvote').click(function (){
    popularity += 1;
    $('.post span').html(popularity);

    //remove the CSS class '.poop'which removes styling
    if (popularity > -5){
      $('.post').removeClass('poop');
    }
    if (popularity >= 10){
      $('.post').addClass('warm');
    }
    if (popularity >= 20){
      $('.post').addClass('hot');
      $('.post').removeClass('warm');
    }
  });
  $('.downvote').click(function (){
    popularity -= 1;
    $('.post span').html(popularity);

    if (popularity <= -5){
      //add the CSS class ".poop" which applies styling
      $('.post').addClass('poop');
    }
    if (popularity < 20){
      $('.post').addClass('warm');
      $('.post').removeClass('hot');
    }
    if (popularity < 10){
      $('.post').removeClass('warm');
    }

  });
}); // close document ready
