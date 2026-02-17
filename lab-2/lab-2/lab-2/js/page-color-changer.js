
// idris zahir lab 2 java script

document.addEventListener("DOMContentLoaded", function () {

    // grab the sliders
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");

    // grab the html element so the background changes the whole page
    const pageBody = document.documentElement;

    // builds an rgb() string from the slider values
    function buildRGBColor() {
        let r = redSlider.value;
        let g = greenSlider.value;
        let b = blueSlider.value;

        return `rgb(${r}, ${g}, ${b})`;
    }

    // applies the rgb color to the page
    function applyBackgroundColor() {
        let rgbColor = buildRGBColor();
        pageBody.style.backgroundColor = rgbColor;
    }

    // run once when page loads
    applyBackgroundColor();

    // update while sliding
    redSlider.addEventListener("input", applyBackgroundColor);
    greenSlider.addEventListener("input", applyBackgroundColor);
    blueSlider.addEventListener("input", applyBackgroundColor);

});



























































/* idris zahir lab 2 java script
//so first we need to grab the sliders in the html file
// we grab red green blue and sent a const pagebody

const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Select the body element
const pageBody = document.documentElement; // this is the <html> element





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

*/