/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "680px";
   	//document.getElementById("page-top").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.body.style.backgroundColor = "rgba(0,0,0,0)";
}


$(document).ready(function() {
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
