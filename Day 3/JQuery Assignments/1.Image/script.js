function renderButtons() {
  let hideButton = $('<button>').text('Hide').click(function () {
    $('img').hide();
  });
  let showButton = $('<button>').text('Show').click(function () {
    $('img').show();
  });
  let roundCornersButton = $('<button>').text('Round Corners').click(function () {
    $('img').css('border-radius', '30px');
  });
  let straightCornersButton = $('<button>').text('Straight Corners').click(function () {
    $('img').css('border-radius', '0');
  });
  let addRedBorderButton = $('<button>').text('Add Red Border').click(function () {
    $('img').css('border', '3px solid red');
  });
  let removeRedBorderButton = $('<button>').text('Remove Red Border').click(function () {
    $('img').css('border', '0');
  });
  let moveUpButton = $('<button>').text('Move Up').click(function () {
    $('img').css('margin-top', '-=10px');
  });
  let moveDownButton = $('<button>').text('Move Down').click(function () {
    $('img').css('margin-top', '+=10px');
  });

  $('.container')
    .append(hideButton)
    .append(showButton)
    .append(roundCornersButton)
    .append(straightCornersButton)
    .append(addRedBorderButton)
    .append(removeRedBorderButton)
    .append(moveUpButton)
    .append(moveDownButton);
}

renderButtons();
