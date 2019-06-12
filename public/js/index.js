$(function(){
  $("#addHorse").on("click", function(){
    var horseName = $("#hn").val();
    var horseAge = $("#hage").val();
    if(horseName && horseAge){
      $("#matchModal").toggle();
    }
  });
  $(".close").on("click", function(){
    $("#matchModal").toggle();
  });
  $("#modalSubmit").on("click", function(){
    window.location.href="/";
  });
  $("#horsestats").on("change", function(event){
    window.location.href="/horses/"+event.target.value;
  })
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

