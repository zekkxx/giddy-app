//An owner can add one of their horses to a race. This horse would go into a 'Horse_Race' table created with/through many-to-many associations between tables horses and races.
//Once the set number of horses is reached, the race begins.
//The horse's stats will determine how they perform in the race.
  //Acceleration: burst of speed at start
  //Speed: speed value of horse
  //Endurance: How long before a horse starts to lose speed
  //Reliability: Chance of disqualification/varying speed consistency 


window.onload=function(){
  var limit = 600;
  var lastFrameTimeMs = 0;
  var maxFPS = 60;
    
  var horse1pic = document.getElementById("box1");
  var horse1pos = 10;
  var velocity = 0.07;
  var horse1speed = 0.07;
  var horse1acceleration = 1;
   

  var horse2pic = document.getElementById("box2"),
    horse2pos = 10,
    velocity2 = 0.07,
    horse2speed = 0.07,
    horse2acceleration = 5,
    lastFrameTimeMs = 0,
    maxFPS = 60;

  var horse3pic = document.getElementById("horse3pic"),
    horse3pos = 10,
    velocity3 = 0.07,
    horse3speed = 0.07,
    horse3acceleration = 5,
    lastFrameTimeMs = 0,
    maxFPS = 60;

  var horse4pic = document.getElementById("horse4pic"),
    horse4pos = 10,
    velocity4 = 0.07,
    horse4speed = 0.07,
    horse4acceleration = 5,
    lastFrameTimeMs = 0,
    maxFPS = 60;

  function update(delta) {
    horse1pos += horse1speed * delta;
    horse2pos += horse2speed * delta;
    horse3pos += horse3speed * delta;
    horse4pos += horse4speed * delta;

    //acceleration logic
    if(horse1pos < 200) {horse1speed = horse1speed + horse1acceleration / 1000;} 
    else {horse1speed = velocity;}
    if(horse2pos < 200) {horse2speed = horse2speed + horse2acceleration / 1000;}
    else {horse2speed = velocity2;}
    if(horse3pos < 200) {horse3speed = horse3speed + horse3acceleration / 1000;}
    else {horse3speed = velocity3;}
    if(horse4pos < 200) {horse4speed = horse4speed + horse4acceleration / 1000;}
    else {horse4speed = velocity4;}

    //endurance logic
    if(horse1pos >= 300) {horse1speed = horse1speed - horse1acceleration / 1000;}
    if(horse2pos >= 300) {horse2speed = horse2speed - 20 / 1000;}
    if(horse3pos >= 300) {horse3speed = horse3speed - horse3acceleration / 1000;}
    if(horse4pos >= 300) {horse4speed = horse4speed - 20 / 1000;}

    // stops animation when box hits limit
    if (horse1pos >= limit) {horse1speed = 0;}
    if (horse2pos >= limit) {horse2speed = 0;}
    if (horse3pos >= limit) {horse3speed = 0;}
    if (horse4pos >= limit) {horse4speed = 0;}
  }

  function draw() {
    horse1pic.style.left = horse1pos + "px";
    horse2pic.style.left = horse2pos + "px";
    horse3pic.style.left = horse3pos + "px";
    horse4pic.style.left = horse4pos + "px";

  }

  function mainLoop(timestamp) {
    // Throttle the frame rate.    
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
      requestAnimationFrame(mainLoop);
      return;
    }
    delta = timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    update(delta);
    draw();
    requestAnimationFrame(mainLoop);
  }

  requestAnimationFrame(mainLoop);
};
// var raceDistance = 600;
// var maxFPS = 60;
// var lastFrameTimeMs = 0;

// var horse1pic = document.getElementById("horsediv");
// var horse2pic = document.getElementById("horse2pic");
// var horse3pic = document.getElementById("horse3pic");
// var horse4pic = document.getElementById("horse4pic");
// var horse5pic = document.getElementById("horse5pic");


  
//   var raceHorse1 = {
//       pos: 10,
//       velocity: 0.07,
//       currentSpeed: 0.07,
//       acceleration: 10,
//       reliability: 10,
//       speed: 10,
//       endurance: 10,
//     },

//     raceHorse2 = {
//       pos: 10,
//       velocity: 0.07,
//       currentSpeed: 0.07,
//       acceleration: 1,
//       reliability: 1, 
//       speed: 1, 
//       endurance: 1,
//     },

//     raceHorse3 = {
//       pos: 10,
//       velocity: 0.07,
//       currentSpeed: 0.07,
//       acceleration: 5,
//       reliability: 5,
//       speed: 5, 
//       endurance: 5,
//     },

//     raceHorse4 = {
//       pos: 10,
//       velocity: 0.07,
//       currentSpeed: 0.07,
//       acceleration: 1,
//       reliability: 5,
//       speed: 10,
//       endurance: 10,
//     },

//     raceHorse5 = {
//       pos: 10,
//       velocity: 0.07,
//       currentSpeed: 0.07,
//       acceleration: 10,
//       reliability: 10,
//       speed: 5,
//       endurance: 5,
//     };

//   function update(delta) {
//     raceHorse1.pos += raceHorse1.currentSpeed * delta;
    
//     if(raceHorse1.pos < 200) {raceHorse1.currentSpeed = raceHorse1.currentSpeed + 1;} 
//     else {raceHorse1.currentSpeed = raceHorse1.velocity;}
//     if(raceHorse2.pos < 200) {raceHorse2.currentSpeed = raceHorse2.currentSpeed + raceHorse2.acceleration/1000;} 
//     else {raceHorse2.currentSpeed = raceHorse2.velocity;}
    
    
//     if(raceHorse1.pos >= 300) {raceHorse1.currentSpeed = raceHorse1.currentSpeed - raceHorse1.endurance/1000;}
//     if(raceHorse2.pos >= 300) {raceHorse2.currentSpeed = raceHorse2.currentSpeed - raceHorse2.endurance/1000;}

   
//     if(raceHorse1.pos >= raceDistance){raceHorse1.currentSpeed = 0;
//       if(raceHorse2.pos >= raceDistance){raceHorse2.currentSpeed = 0;
//       }
//     }
//   }

//   function draw() {
//     horse1pic.style.left = raceHorse1.pos + "px";
//     horse2pic.style.left = raceHorse2.pos + "px";
//     horse3pic.style.left = raceHorse3.pos + "px";
//     horse4pic.style.left = raceHorse4.pos + "px";
//     horse5pic.style.left = raceHorse5.pos + "px";
    
//   }

//   function mainLoop(timestamp) {
//   // Throttle the frame rate.    
//     if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
//       requestAnimationFrame(mainLoop);
//       return;
//     }
//     delta = timestamp - lastFrameTimeMs;
//     lastFrameTimeMs = timestamp;

//     update(delta);
//     draw();
//     requestAnimationFrame(mainLoop);
//   }

//   requestAnimationFrame(mainLoop);
// };
///////////////////////////////////////////////////////////////////////////////////////////////
// var raceHorses = [
//   raceHorse1 = {
//     position: 10,
//     velocity: 0.07,
//     currentSpeed: 0.07,
//     acceleration: 10,
//     reliability: 10,
//     speed: 10,
//     endurance: 10,
//   },

//   raceHorse2 = {
//     position: 10,
//     velocity: 0.07,
//     currentSpeed: 0.07,
//     acceleration: 1,
//     reliability: 1, 
//     speed: 1, 
//     endurance: 1,
//   },

//   raceHorse3 = {
//     position: 10,
//     velocity: 0.07,
//     currentSpeed: 0.07,
//     acceleration: 5,
//     reliability: 5,
//     speed: 5, 
//     endurance: 5,
//   },

//   raceHorse4 = {
//     position: 10,
//     velocity: 0.07,
//     currentSpeed: 0.07,
//     acceleration: 1,
//     reliability: 5,
//     speed: 10,
//     endurance: 10,
//   },

//   raceHorse5 = {
//     position: 10,
//     velocity: 0.07,
//     currentSpeed: 0.07,
//     acceleration: 10,
//     reliability: 10,
//     speed: 5,
//     endurance: 5,
//   }
// ];
// console.log(raceHorses[1].position);
// console.log(raceHorses);

// function update(delta) {
//   for (i = 0; i < 5; i++) {
//     raceHorses[i].position += raceHorses[i].currentSpeed * delta;
//     //acceleration logic
//     if(raceHorses[i].position < 200) {raceHorses[i].currentSpeed = raceHorses[i].currentSpeed + raceHorses[i].acceleration/1000;} 
//     else {raceHorses[i].currentSpeed = raceHorses[i].velocity;}
    
//     //endurance logic///////// needs updating from acceleration
//     if(raceHorses[i].position >= 300) {raceHorses[i].currentSpeed = raceHorses[i].currentSpeed - raceHorses[i].endurance/1000;}

//     // stops animation when box hits limit
//     if(raceHorses[i].position >= raceDistance){raceHorses[i].currentSpeed = 0;
//       return;
//     }
//   }
// }

// function draw() {
//   horse1pic.style.left = raceHorses[0] + 'px';
//   horse2pic.style.left = raceHorses[1] + "px";
//   horse3pic.style.left = raceHorses[2] + "px";
//   horse4pic.style.left = raceHorses[3] + "px";
//   horse5pic.style.left = raceHorses[4] + "px";
    
// }

// function mainLoop(timestamp) {
//   // Throttle the frame rate.    
//   if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
//     requestAnimationFrame(mainLoop);
//     return;
//   }
//   delta = timestamp - lastFrameTimeMs;
//   lastFrameTimeMs = timestamp;

//   update(delta);
//   draw();
//   requestAnimationFrame(mainLoop);
// }

// requestAnimationFrame(mainLoop);






// var getRandom = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

//// SPEED LOGIC ////
//Increases maximum random number



//// ACCELERATION LOGIC ////
//increases minimum random number until distance based off db value is reached





//// RELIABILITY LOGIC////

//chance to be disqualified or scratched
//starting reliability 80%. for every reliability stat point +5%

//get horse's reliability stat from horse db
//80 + (stat - 1) * 5 = horseReliability
//if horseReliability <= getRandom(1, 100) then horse is scratched



//// ENDURANCE LOGIC ////
//Reduces maximum random number after a travel distance based off db value is reached

// var raceHorses = {
//   blue:
//   {
//     user_name:
//     name: 
//     speed:
//     acceleration:
//     reliability:
//     endurance:
//     travelDistance:
//   },
//   green:
//   {
//     user_name:
//     name: 
//     speed:
//     acceleration:
//     reliability:
//     endurance:
//     travelDistance:
//   },
//   red:
//   {
//     user_name:
//     name: 
//     speed:
//     acceleration:
//     reliability:
//     endurance:
//     travelDistance:
//   },
//   yellow:
//   {
//     user_name:
//     name: 
//     speed:
//     acceleration:
//     reliability:
//     endurance:
//     travelDistance:
//   }
//   white:
//   {
//     user_name:
//     name: 
//     speed:
//     acceleration:
//     reliability:
//     endurance:
//     travelDistance:
//   }
// };