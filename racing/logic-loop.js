//Loop method start/mixed up
// var limit = 600;
    
// var box = document.getElementById('box');
// boxPos = 10,
// velocity = 0.07,
// boxVelocity = 0.07,
// acceleration = 1,
// lastFrameTimeMs = 0,
// maxFPS = 60;

// var box2 = document.getElementById('box2'),
//   boxPos2 = 10,
//   velocity2 = 0.07,
//   boxVelocity2 = 0.07,
//   acceleration2 = 5,
//   lastFrameTimeMs = 0,
//   maxFPS = 60;
//     var maxFPS= 60;
//     var box2 = document.getElementById('box2');
//     var horse1 = {
//     pos: 10,
//     velocity: 0.07,
//     boxVelocity: 0.07,
//     acceleration: 5,
//     endurance: 2,
//     lastFrameTimeMs: 0,
//     maxFPS: 60,
//     }
//     var horse2 = {
//       pos: 10,
//       velocity: 0.07,
//       boxVelocity: 0.07,
//       acceleration: 1,
//       endurance: 2,
//       lastFrameTimeMs: 0,
//       maxFPS: 60,
//       }
//   let horses = [];

//   horses.push(horse1);
//   horses.push(horse2);

//   function update(delta) {
//     for (let i = 0; i < horses.length; i++){
//       horses[i].
//     }

//     pos += boxVelocity * delta;
    
//     //acceleration logic
//     if(pos < 200) {boxVelocity = boxVelocity + acceleration  / 1000} 
//     else {boxVelocity = velocity};
//     // if(boxPos2 < 200) {boxVelocity2 = boxVelocity2 + acceleration2 / 1000}
//     // else {boxVelocity2 = velocity2};

//     //endurance logic
//     if(pos >= 300) {boxVelocity = boxVelocity - acceleration  / 1000};
//     // if(boxPos2 >= 300) {boxVelocity2 = boxVelocity2 - 20 / 1000};


//     // stops animation when box hits limit
//     if (pos >= limit) boxVelocity = 0;
//     // if (boxPos2 >= limit) boxVelocity2 = 0;
//   }

//   function draw() {
//     box.style.left = horses[0].position + 'px';
//     box2.style.left = horses[1].position + 'px';

//   }

//   function mainLoop(timestamp) {
//     // Throttle the frame rate.    
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
