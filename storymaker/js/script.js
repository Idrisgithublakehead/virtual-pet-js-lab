"use strict";
/* ok so first i set use script which is a built in script function which allows me to now
be more strict with mistakes and Makes your code safer and cleaner */


/* ok now lets move on to actually creating the array for the const objects*/

// ok so these are all the random Sentence parts in arrays which we can grab later
const subjects = ["A pirate", "The squirrel", "My neighbor", "A ninja", "The penguin"];
const actions = ["jumped over", "dropped", "painted", "chased", "accidentally kicked"];
const descriptors = ["a glowing", "a sticky", "a mysterious", "a tiny", "a massive"];
const objects = ["pumpkin", "backpack", "remote control", "sandwich", "keyboard"];
const locations = ["at the beach", "inside the mall", "on a rooftop", "in the forest", "under the table"];

/* now we can actually build the tRACKERDS, OF COURSE NOW
IT IS set to 0 which will be updated later */

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;




/* ok next we can create const for all of our html buttons, and pickls
we set thsese now and later can grab them because the get */

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const buildBtn = document.getElementById("buildBtn");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");

const pick1 = document.getElementById("pick1");
const pick2 = document.getElementById("pick2");
const pick3 = document.getElementById("pick3");
const pick4 = document.getElementById("pick4");
const pick5 = document.getElementById("pick5");

const output = document.getElementById("outputText");











// ok so here for button 1 is the actual logic and 
// what happens when its clicked ---------

btn1.addEventListener("click", () => {

  // this right here will actually show the current button
  pick1.textContent = subjects[i1];

  // then we increment it
  i1++;

  // if we reach the end, loop back
  if (i1 >= subjects.length) {
    i1 = 0;
  }

});







// --------- ok now we create the action Button Logic ---------

btn2.addEventListener("click", () => {

  // this right here will actually display current action
  pick2.textContent = actions[i2];
  // and also This just moves to the next item in the array.

  // increase counte
   i2 += 1;

  // reset manually if too it gets too high like over the array length
  if (i2 === actions.length) {
    i2 = 0;
  }

});





// ok so here i actually just created a function for this button to change it up slightly
btn3.addEventListener("click", function() {

  // move index forward first
  i3++;

  // if we passed last item, restart
  if (i3 > descriptors.length - 1) {
    i3 = 0;
  }

  // now update the text
  pick3.textContent = descriptors[i3];

});





btn4.addEventListener("click", () => {
  pick4.textContent = objects[i4];

  i4++;
  if (i4 >= objects.length) {
    i4 = 0;
  }
});






// --------- ok so this is the location setter ---------

btn5.addEventListener("click", () => {

  // here we can actually advance the index
  i5++;

  // now...if index goes past last item reset it all
  if (i5 > locations.length - 1) {
    i5 = 0;
  }

  // now update the visible text
  pick5.textContent = locations[i5];

});











// ---------ok this part is the main  Build Story Button ---------

buildBtn.addEventListener("click", function () {

  // so this code right here actually creates sentence using template string
  const finalStory = `${pick1.textContent} ${pick2.textContent} ${pick3.textContent} ${pick4.textContent} ${pick5.textContent}.`;

  // after we crate we can actually display sentence
  output.textContent = finalStory;

});










// ok so now for the random button extra step, i created a functon
// that randomly indexs through manuall and builds an output sentence
randomBtn.addEventListener("click", function () {

  // pick random indexes manually
  let s = subjects[Math.floor(Math.random() * subjects.length)];
  let a = actions[Math.floor(Math.random() * actions.length)];
  let d = descriptors[Math.floor(Math.random() * descriptors.length)];
  let o = objects[Math.floor(Math.random() * objects.length)];
  let l = locations[Math.floor(Math.random() * locations.length)];

  // build sentence
  output.textContent = s + " " + a + " " + d + " " + o + " " + l + ".";

});











// ok and finall we can add a Reset button
// if the user clickes the reset this function runs
// it will reset to defualt and text content displays the below outputs
resetBtn.addEventListener("click", function () {

  pick1.textContent = "Please Choose subject";
  pick2.textContent = "Please Choose action";
  pick3.textContent = "Please Choose descriptor";
  pick4.textContent = "Please Choose object";
  pick5.textContent = "Please Choose location";

  output.textContent = "Your story will appear here.";

  i1 = i2 = i3 = i4 = i5 = 0;

});







