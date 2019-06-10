$(function() {
  // connecting via form class
  $(".horseForm").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newHorse = {
      horseName: $("#hn").val().trim(),
      userId: 0,
      age: $("#hage").val().trim() 
    };
    $.ajax("/horses", {
      type: "POST",
      data: newhorse
    }).then(
      function(res) {
        console.log(res) ---check---functionality
        // get response and get ID
        var horseStats = {
          // horseId: res.id???????
          topspeed: $("#horseTopSpeed").val().trim(),
          acceleration: $("#horseAcceleration").val().trim(),
          reliability: $("#horseReliability").val().trim(), 
          endurance: $("#horseEndurance").val().trim()
        }
        $.ajax("/horsestats", {
          type: "POST",
          data: horseStats
        }).then(
          function() {
            console.log("stats created");
          }
        ); 
      }
    );

    console.log($("#hn").val().trim());
    console.log($("#hage").val().trim());
    console.log($("#horseTopSpeed").val().trim());
    console.log($("#horseEndurance").val().trim());
    console.log($("#horseReliability").val().trim());
    console.log($("#horseAcceleration").val().trim());
    });
});
