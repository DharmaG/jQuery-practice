$(document).ready(function () {

  // add click to the trash icons that were there on page load
  $('.glyphicon').click(function (theEvent) {
      // "this" is the DOM object that was just clicked
      // "theEvent.currentTarget" is also the DOM object that was just clicked

      // "parent()" gets you the tag's parent
      // $(this).parent().remove();

      // "closest()" gets you a tag's ancestor
      $(this).closest('li').remove();
  });


  $('.btn').click(function () {
      // "val()" is the jQuery version of "value"
      var todoText = $('input').val();

      // you can create a DOM object for new HTML with a string
      // the backticks `` can make a string that spans multiple lines
      var itemDom =
        $(`<li>
            <span>` + todoText + `</span>
            <span class="glyphicon glyphicon-trash"></span>
           </li>`);

      // "html()" is the jQuery version of "innerHTML"
      // $('ul').html(itemDom);
      // "html()" removes the old content before adding new

      // "append()" is the jQuery version of "appendChild()"
      // "append()" leaves the old content alone and adds the new on the bottom
      $('ul').append(itemDom);

      // clear the input's value with "val()"
      $('input').val("");

      // add the click function to the newly created trash icon
      itemDom.find('.glyphicon').click(function (theEvent) {
          $(this).closest('li').remove();
      });
  }); // close $('.btn').click()

}); // close $(document).ready()



$(document).ready(function () {

    $('.poof').click(function () {
        // get the current selection from the dropdown
        var selection = $('.function').val();

        if (selection === 'hide') {
          // hide() / show()
          $('ul').toggle(5000);
        }

        else if (selection === 'fade') {
          // fadeOut() / fadeIn()
          $('ul').fadeToggle(5000);
        }

        else if (selection === 'slide') {
          // slideUp() / slideDown()
          $('ul').slideToggle(5000);
        }
    });

}); // close $(document).ready()

$(document).ready(function (){
  $('poof').click(function(){
    var selection = $('function').val();

    if (selection ==='hide')});
});



var myDragon = {
  right: 0,
  bottom:0
};

var speed = 20;

$(document).ready(function (theEvent){
  console.log('You just pressed:' + theEvent.keycode);

  switch (theEvent.keycode){
    case 32: //space bar key
    case 38: //up arrow key
    case 87: //"w key"
    //Go up
    myDragon.bottom += speed;
    break;

    case 39: // right arrow key
    case 68: //"d" key
    //go dropdown
    myDragon.right -= speed;
    break;

    case 40: //down arrow key
    case 83: //"s" key
    //Go dropdown
    myDragon.bottom -= speed;
    break;

    case 37:
    case 65:
    myDragon.right += speed;
    break;
  }

  $('.dragon').css('right', myDragon.right);
  $('.dragon').css('right', myDragon.bottom);

});
