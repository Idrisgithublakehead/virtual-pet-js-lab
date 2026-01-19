/* 
  Virtual Pet Lab idris zahir
  first im going to work on Variables + initial display
*/

// first we need to  Declare and initialize pet attributes
let petName = "Luna";               // this is set as string
let petType = "dragon";             
let petAge = 3;                     // this here is set as number
let isHungry = true;                
let favoriteActivities = ["flying", "sleeping", "exploring"]; // create an array right here
let mood = "excited";               



// ok so i did commit part one but now im coming back to the top and initliazing the random const variables

// Random options for generating a pet
const petTypes = ["monkey", "cat", "dragon", "hamster"];
const moods = ["sad", "sleepy", "excited", "angry"];

const activitiesByType = {
  monkey: ["climbing trees", "swinging", "stealing snacks"],
  cat: ["napping", "climbing", "chasing lasers"],
  dragon: ["flying", "guarding treasure", "breathing sparks"],
  hamster: ["running on a wheel", "snacking", "tunneling"]
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// now we can Get output elements from the page USING DOM
const nameOut = document.getElementById("nameOut");
const typeOut = document.getElementById("typeOut");
const ageOut = document.getElementById("ageOut");
const hungryOut = document.getElementById("hungryOut");
const moodOut = document.getElementById("moodOut");
const activityOut = document.getElementById("activityOut");
const descriptionOut = document.getElementById("descriptionOut");

// NOW WE can create a function to Display the pet info on the page 
function renderPet() {
  nameOut.textContent = petName;
  typeOut.textContent = petType;
  ageOut.textContent = petAge;
  hungryOut.textContent = isHungry ? "Yes" : "No";
  moodOut.textContent = mood;

  // just show the first activity of the array we created earlier 
  activityOut.textContent = favoriteActivities[0];

  descriptionOut.textContent = "";
}

function generateRandomPet() {
  petType = pickRandom(petTypes);
  petAge = Math.floor(Math.random() * 16);
  mood = pickRandom(moods);
  isHungry = Math.random() < 0.5;

  favoriteActivities = activitiesByType[petType];

  renderPet();
}

// now we need to actually display the function once the page loads in AND Render everything above
generateRandomPet();





