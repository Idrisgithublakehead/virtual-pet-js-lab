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

// now we need to actually display the function once the page loads in
renderPet();




