function ModelCar(make, carName, paintColor, modelScale, cost, buildMaterial, releaseYear, productCode, barcode, boxType, carLength, carWidth, isDoorOpen) {
    this.make = make;
    this.carName = carName;
    this.paintColor = paintColor;
    this.modelScale = modelScale;
    this.cost = cost;
    this.buildMaterial = buildMaterial;
    this.releaseYear = releaseYear;
    this.productCode = productCode;
    this.barcode = barcode;
    this.boxType = boxType;
    this.carLength = carLength;
    this.carWidth = carWidth;
    this.isDoorOpen = isDoorOpen;
}

let featuredCar = new ModelCar(
    "Bburago",
    "Ferrari F50",
    "Red",
    "1:24",
    15.99,
    "Diecast Metal",
    1995,
    "26010-BBU-Red",
    "764072005287",
    "Window Box",
    '7"',
    '3"',
    false
);

function displayCar() {
    let outputArea = document.getElementById("carDetails");

    outputArea.innerHTML =
        "<p><strong>Brand:</strong> " + featuredCar.make + "</p>" +
        "<p><strong>Model:</strong> " + featuredCar.carName + "</p>" +
        "<p><strong>Color:</strong> " + featuredCar.paintColor + "</p>" +
        "<p><strong>Scale:</strong> " + featuredCar.modelScale + "</p>" +
        "<p><strong>Price:</strong> $" + featuredCar.cost.toFixed(2) + "</p>" +
        "<p><strong>Material:</strong> " + featuredCar.buildMaterial + "</p>" +
        "<p><strong>Year:</strong> " + featuredCar.releaseYear + "</p>" +
        "<p><strong>SKU:</strong> " + featuredCar.productCode + "</p>" +
        "<p><strong>UPC:</strong> " + featuredCar.barcode + "</p>" +
        "<p><strong>Packaging:</strong> " + featuredCar.boxType + "</p>" +
        "<p><strong>Length:</strong> " + featuredCar.carLength + "</p>" +
        "<p><strong>Width:</strong> " + featuredCar.carWidth + "</p>" +
        "<p><strong>Doors Open:</strong> " + featuredCar.isDoorOpen + "</p>";
}

function applyDiscount() {
    featuredCar.cost = featuredCar.cost * 0.90;
    displayCar();
}