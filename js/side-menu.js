

$(document).ready(function() {
  // Open side menu
  $('.openNav').click(function() {
    if ($(window).width() < 500) {
      document.getElementById("mySidenav").style.width = "100vw";
    } else {
      document.getElementById("mySidenav").style.width = "43vw";
    }
    $(".opacity-layer").show();
  });

  $('.opacity-layer').click(function() {
    $(".opacity-layer").hide();
    document.getElementById("mySidenav").style.width = "0";
  });

  // Close side Menu
  $('.closeNav').click(function() {
    document.getElementById("mySidenav").style.width = "0";
    $(".opacity-layer").hide();
  });

  // Select / Unselect all checkboxes
  var checkboxesOn = false;
  var checkboxes = [];

  for (var i = 0; i < 7; i++) {
    checkboxes.push(false);
  }

  $('.checkbox-top').click(function(){
    checkboxesOn = !checkboxesOn;
    if (checkboxesOn)
      $('img.checkbox').attr("src", "../img/list/checkbox-on.png");
    else
      $('img.checkbox').attr("src", "../img/list/checkbox-off.png");
  });

  // Individual checkboxes
  $('.checkbox').click(function() {
    var index = $(this)[0].id - 1;
    if (checkboxes[index] == false){
      checkboxes[index] = true;
      $(this)[0].src = "../img/list/checkbox-on.png";
    } else {
      checkboxes[index] = false;
      $(this)[0].src =  "../img/list/checkbox-off.png";
    }
  });

});
