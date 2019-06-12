// Onclick function, if horseName and horseAge have been added then toggle modal
$(function(){
  $("#addHorse").on("click", function(){
    var horseName = $("#hn").val();
    var horseAge = $("#hage").val();
    if(horseName && horseAge){
      $("#matchModal").toggle();
    }
  });
  // Onclick toggle the Modal to hide
  $(".close").on("click", function(){
    $("#matchModal").toggle();
  });
  // Onclick return to homepage
  $("#modalSubmit").on("click", function(){
    window.location.href="/";
  });
  $("#loginLinkButton").on("click", function(){
    window.location.href="/login";
  });
  $("#logoutLinkButton").on("click", function(){
    window.location.href="/logout";
  });
  $("#addHorseLinkButton").on("click", function(){
    window.location.href="/addhorse";
  });
  $(".deleteHorseLinkButton").on("click", function(){
    //window.location.href="/addhorse";
    console.log("Neigh, we will not go away");
  });
});
