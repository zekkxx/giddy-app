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
});

