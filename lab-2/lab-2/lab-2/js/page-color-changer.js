// idris zahir lab 2 java script
//so first we need to grab the sliders in the html file
// we grab red green blue and sent a const pagebody

const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Select the body element
const pageBody = document.body;




// ok so this code below is a function that grabs the values of the slider and puts them in a variable.
function buildRGBColor() {

    let r = redSlider.value;
    let g = greenSlider.value;
    let b = blueSlider.value;

    return `rgb(${r}, ${g}, ${b})`;
}



function applyBackgroundColor() {

    let rgbColor = buildRGBColor();
    pageBody.style.backgroundColor = rgbColor;
}


// ok so as soon as tghe page loads we can run this background color once when the page loads
applyBackgroundColor();


// now we can set each slider so it will have its own  event listener
redSlider.addEventListener("input", function () {
    applyBackgroundColor();
});

greenSlider.addEventListener("input", function () {
    applyBackgroundColor();
});

blueSlider.addEventListener("input", function () {
    applyBackgroundColor();
});
