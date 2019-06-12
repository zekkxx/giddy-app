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
});
