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
});

// function to create new list row of horses
function createHorseRow(ownerData) {
  // var newTr = $("<tr>");
  // newTr.data("owner", ownerData);
  // newTr.append("<td>" + ownerData.name + "</td>");
  // if (ownerData.Horse) {
  //   newTr.append("<td>" + ownerData.Horses.length + "</td>");
  // } else {
  //   newTr.append("<td>No horses exist<td>");
  // }
  // newTr.append("<td><a href='/horse/stats" + horseData.id + "'></a></td>");
}

function getOwner() {
  // $.get("/api/")
}
