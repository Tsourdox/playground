

function toggleBackground() {
    if (document.body.style.backgroundColor == "purple") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "purple";
    }
}

function randomizeBackgroundSimple() {
    var randomValue = Math.random();
    if (randomValue < 0.2) {
        document.body.style.backgroundColor = "blue";
    } else if (randomValue < 0.4) {
        document.body.style.backgroundColor = "pink";
    } else if (randomValue < 0.6) {
        document.body.style.backgroundColor = "red";
    } else if (randomValue < 0.8) {
        document.body.style.backgroundColor = "orange";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}

function randomizeBackgroundWithRGB() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    
    var rgbValue = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = rgbValue;
}

function randomizeBackgroundWithHex() {
    var red1 = convertToHex(Math.round(Math.random() * 15));
    var red2 = convertToHex(Math.round(Math.random() * 15));
    var green1 = convertToHex(Math.round(Math.random() * 15));
    var green2 = convertToHex(Math.round(Math.random() * 15));
    var blue1 = convertToHex(Math.round(Math.random() * 15));
    var blue2 = convertToHex(Math.round(Math.random() * 15));

    var rgbValue = "#"+red1+red2+green1+green2+blue1+blue2;
    document.body.style.backgroundColor = rgbValue;

    console.log(rgbValue);
}

function convertToHex(value) {
    if (value == 10) {
        return "A";
    }
    if (value == 11) {
        return "B";
    }
    if (value == 12) {
        return "C";
    }
    if (value == 13) {
        return "D";
    }
    if (value == 14) {
        return "E";
    }
    if (value == 15) {
        return "F";
    }
    return value;
}

console.log(myLibrary.calculateRectangleArea(5.5, 3.3));
console.log(myLibrary.calculateTriangleArea(5.5, 3.3));
console.log(myLibrary.calculateCircleArea(2));























// Pass by value
// string, number, boolean

// Pass by reference
// array, object

// var fotballPlayer = {
//     name: "David Jensen",
//     age: 22,
//     shirtNumber: 14,
//     position: "Mid-fielder",
//     gender: "male",
// };

// var newFotballPlayer = fotballPlayer;
// newFotballPlayer.name = "Albert Eistein";
// console.log(newFotballPlayer);
// console.log(fotballPlayer);


// var message = "Welcome";
// var newMessage = message;
// newMessage = "Welcome home!";
// console.log(message);
// console.log(newMessage);