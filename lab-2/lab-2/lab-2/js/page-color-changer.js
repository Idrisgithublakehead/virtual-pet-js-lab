// idris zahir lab 2 java script
//so first we need to grab the sliders in the html file
// we grab red green blue and sent a const pagebody

const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Select the body element
const pageBody = document.body;




// function that builds the rgb color string
function buildRGBColor() {

    let r = redSlider.value;
    let g = greenSlider.value;
    let b = blueSlider.value;

    return `rgb(${r}, ${g}, ${b})`;
}


// function that applies the color to the page
function applyBackgroundColor() {

    let rgbColor = buildRGBColor();
    pageBody.style.backgroundColor = rgbColor;
}


// ok so as soon as tghe page loads we can run this background color once when the page loads
applyBackgroundColor();


// each slider will have its own  event listener
redSlider.addEventListener("input", function () {
    applyBackgroundColor();
});

greenSlider.addEventListener("input", function () {
    applyBackgroundColor();
});

blueSlider.addEventListener("input", function () {
    applyBackgroundColor();
});
