

$(document).ready(function() {


  $('.openNav').click(function() {
    document.getElementById("mySidenav").style.width = "680px";
    $(".opacity-layer").show();
  });


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
