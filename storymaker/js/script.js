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
