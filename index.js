// var thumbsize = 14;
//
// function draw(slider, splitvalue) {
//
//   /* set function vars */
//   var min = slider.querySelector('.min');
//   var max = slider.querySelector('.max');
//   var lower = slider.querySelector('.lower');
//   var upper = slider.querySelector('.upper');
//   var legend = slider.querySelector('.legend');
//   var thumbsize = parseInt(slider.getAttribute('data-thumbsize'));
//   var rangewidth = parseInt(slider.getAttribute('data-rangewidth'));
//   var rangemin = parseInt(slider.getAttribute('data-rangemin'));
//   var rangemax = parseInt(slider.getAttribute('data-rangemax'));
//
//   /* set min and max attributes */
//   min.setAttribute('max', splitvalue);
//   max.setAttribute('min', splitvalue);
//
//   /* set css */
//   min.style.width = parseInt(thumbsize + ((splitvalue - rangemin) / (rangemax - rangemin)) * (rangewidth - (2 * thumbsize))) + 'px';
//   max.style.width = parseInt(thumbsize + ((rangemax - splitvalue) / (rangemax - rangemin)) * (rangewidth - (2 * thumbsize))) + 'px';
//   min.style.left = '0px';
//   max.style.left = parseInt(min.style.width) + 'px';
//   min.style.top = lower.offsetHeight + 'px';
//   max.style.top = lower.offsetHeight + 'px';
//   legend.style.marginTop = min.offsetHeight + 'px';
//   slider.style.height = (lower.offsetHeight + min.offsetHeight + legend.offsetHeight) + 'px';
//
//   /* correct for 1 off at the end */
//   if (max.value > (rangemax - 1)) max.setAttribute('data-value', rangemax);
//
//   /* write value and labels */
//   max.value = max.getAttribute('data-value');
//   min.value = min.getAttribute('data-value');
//   lower.innerHTML = min.getAttribute('data-value');
//   upper.innerHTML = max.getAttribute('data-value');
//
// }
//
// function init(slider) {
//   /* set function vars */
//   var min = slider.querySelector('.min');
//   var max = slider.querySelector('.max');
//   var rangemin = parseInt(min.getAttribute('min'));
//   var rangemax = parseInt(max.getAttribute('max'));
//   var avgvalue = (rangemin + rangemax) / 2;
//   var legendnum = slider.getAttribute('data-legendnum');
//
//   /* set data-values */
//   min.setAttribute('data-value', rangemin);
//   max.setAttribute('data-value', rangemax);
//
//   /* set data vars */
//   slider.setAttribute('data-rangemin', rangemin);
//   slider.setAttribute('data-rangemax', rangemax);
//   slider.setAttribute('data-thumbsize', thumbsize);
//   slider.setAttribute('data-rangewidth', slider.offsetWidth);
//
//   /* write labels */
//   var lower = document.createElement('span');
//   var upper = document.createElement('span');
//   lower.classList.add('lower', 'value');
//   upper.classList.add('upper', 'value');
//   lower.appendChild(document.createTextNode(rangemin));
//   upper.appendChild(document.createTextNode(rangemax));
//   slider.insertBefore(lower, min.previousElementSibling);
//   slider.insertBefore(upper, min.previousElementSibling);
//
//   /* write legend */
//   var legend = document.createElement('div');
//   legend.classList.add('legend');
//   var legendvalues = [];
//   for (var i = 0; i < legendnum; i++) {
//     legendvalues[i] = document.createElement('div');
//     var val = Math.round(rangemin + (i / (legendnum - 1)) * (rangemax - rangemin));
//     legendvalues[i].appendChild(document.createTextNode(val));
//     legend.appendChild(legendvalues[i]);
//
//   }
//   slider.appendChild(legend);
//
//   /* draw */
//   draw(slider, avgvalue);
//
//   /* events */
//   min.addEventListener("input", function() {
//     update(min);
//   });
//   max.addEventListener("input", function() {
//     update(max);
//   });
// }
//
// function update(el) {
//   /* set function vars */
//   var slider = el.parentElement;
//   var min = slider.querySelector('#min');
//   var max = slider.querySelector('#max');
//   var minvalue = Math.floor(min.value);
//   var maxvalue = Math.floor(max.value);
//
//   /* set inactive values before draw */
//   min.setAttribute('data-value', minvalue);
//   max.setAttribute('data-value', maxvalue);
//
//   var avgvalue = (minvalue + maxvalue) / 2;
//
//   /* draw */
//   draw(slider, avgvalue);
// }
//
// var sliders = document.querySelectorAll('.min-max-slider');
// sliders.forEach(function(slider) {
//   init(slider);
// });
//
// var randomColor1 = Math.random().toString(16).slice(-6);
// var randomColor2 = Math.random().toString(16).slice(-6);
// var randomColor3 = Math.random().toString(16).slice(-6);
//
//
// document.querySelector(".color1").style.backgroundColor = "#" + randomColor1;
// document.querySelector(".color2").style.backgroundColor = "#" + randomColor2;
// document.querySelector(".color3").style.backgroundColor = "#" + randomColor3;
// document.querySelector(".color1").innerHTML = "#" + randomColor1;
// document.querySelector(".color2").innerHTML = "#" + randomColor2;
// document.querySelector(".color3").innerHTML = "#" + randomColor3;
//
//
//
// // defines the smallest value for each of the generated numbers
// // if set to 3, then 25 split into 10, 2, 13 wouldn't be valid as one of them is lower than 3
// let smallestValue = 10;
//
// // generate numbers
// let totalRange = 100;
// let numberOne = smallestValue + Math.floor(Math.random() * (totalRange - 3*smallestValue));
// totalRange -= numberOne;
// let numberTwo = smallestValue + Math.floor(Math.random() * (totalRange - 2*smallestValue));
// let numberThree = 100 - (numberOne + numberTwo);

// localStorage.clear();

// Get the day of the month with Date object
const day = new Date().getDate();

// localStorage.setItem("day", 500);

// And the month to prevent repeats
const month = new Date().getMonth()+1;

// And year
const year = new Date().getFullYear();

const currdate = day+"/"+month+"/"+year;

let date = localStorage.getItem("date");
// alert(currdate);
// alert(date);
if(date == null){
  date = currdate;
  // alert("setting date to " + currdate);
}
if(currdate != date){
  date = currdate;
  // alert("resetting");
  localStorage.removeItem("attempts");
  localStorage.removeItem("won");
  localStorage.removeItem("rcolor");
  localStorage.removeItem("gcolor");
  localStorage.removeItem("bcolor");
  // alert("reseting")
}
// alert("date is "+date);
localStorage.setItem("date", date);

var limit = 20;

var submitButton = document.getElementById("submitButton");
var colorList = document.getElementById("colorList");


var win_color = getNumber(day,month,year);

function hexToRGB(c) {
  var hex = c.replace("#", "");
  var r = hex.substring(0, 2);
  var g = hex.substring(2, 4);
  var b = hex.substring(4, 6);
  // alert(parseInt(r, 16)+ " " + parseInt(g, 16) + " " + parseInt(b, 16));
  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
}

var win_color_rgb = hexToRGB(win_color);
var red = win_color_rgb[0];
var green = win_color_rgb[1];
var blue = win_color_rgb[2];

var won = false;
let playedAlready = localStorage.getItem("won");
if(playedAlready !=null){
  won = true;
}

var attempt = localStorage.getItem("attempts");
// alert(attempt);
if(attempt == null){
    attempt = 0;
    localStorage.setItem("rcolor", "[]");
    localStorage.setItem("gcolor", "[]");
    localStorage.setItem("bcolor", "[]");
}
else{
  // attempt = parseInt(attempt);
  var rcolors = JSON.parse(localStorage.getItem("rcolor"));
  var gcolors = JSON.parse(localStorage.getItem("gcolor"));
  var bcolors = JSON.parse(localStorage.getItem("bcolor"));
  // alert("rcolors is " + rcolors);
  // alert("gcolors is " + gcolors);
  // alert("bcolors is " + bcolors);
  // alert("attempts is " + attempt);
  for(var i = 1; i<=rcolors.length; i++){
    // alert("r " + parseInt(rcolors[i-1]));
    // alert("g " + parseInt(gcolors[i-1]));
    // alert("b " + parseInt(bcolors[i-1]));
    // alert("i " + i);
    // alert("adding color pls");
    addColor(parseInt(rcolors[i-1]),parseInt(gcolors[i-1]),parseInt(bcolors[i-1]),i);
    // alert("added color");
  }
}






function updateLeaderBoard(){
  let stats = document.querySelector(".stats");
  stats.innerHTML = "";
  if(localStorage.getItem("gamesPlayed") != null){
    let gp = document.createElement("h6");
    let scores = document.createElement("h6");
    let hs = document.createElement("h6");

    let avg = Math.round(localStorage.getItem("scores")/localStorage.getItem("gamesPlayed")*10)/10;
    // alert(localStorage.getItem("scores"));
    scores.innerHTML = "Your average number of attempts is " + avg;
    if(localStorage.getItem("gamesPlayed") == 1){
      gp.innerHTML = "You've played 1 game!";
    }
    else
      gp.innerHTML = "You've played " + localStorage.getItem("gamesPlayed") + " games!";
    hs.innerHTML = "Your High Score is " + localStorage.getItem("highScore");

    stats.appendChild(gp);
    stats.appendChild(scores);
    stats.appendChild(hs);
  }
  else{
    stats.innerHTML = "Nothing to see here!";
  }
}
updateLeaderBoard();
if(won)
$(document).ready(function() { $("#leaderboardModal").modal('show'); });



function ColorToHex(color) {
    var hexadecimal = color.toString(16).toUpperCase();
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  // alert('converting rgv to hex r' + typeof(red) + "g" + green + "b " + blue);
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

function getNumber(d,m,y) {

  // Crazy math stuff
  let num = Math.round((d + 4) / m * 39163 * y).toString();

  // To convert it back to a number, use the + operator before parentheses
  // Don’t forget to use % on the max value, I just put 31 as a placeholder

  return "#"+(+num%16777215).toString(16);
}




document.querySelector(".onecolor").style.backgroundColor = win_color;
// document.querySelector("body").style.backgroundColor = ConvertRGBtoHex(red, green, blue);
// alert(ConvertRGBtoHex(red, green, blue));
// document.querySelector(".onecolor").innerHTML = ConvertRGBtoHex(red, green, blue) + " " + red + " " + green + " " + blue;

var redSlider = document.getElementById("redRange");
var greenSlider = document.getElementById("greenRange");
var blueSlider = document.getElementById("blueRange");
var outputRed = document.getElementById("redOutput");
var outputGreen = document.getElementById("greenOutput");
var outputBlue = document.getElementById("blueOutput");
outputRed.value = redSlider.value; // Display the default slider value
outputGreen.value = greenSlider.value; // Display the default slider value
outputBlue.value = blueSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
redSlider.oninput = function() {
  outputRed.value = this.value;
}

greenSlider.oninput = function() {
  outputGreen.value = this.value;
}

blueSlider.oninput = function() {
  outputBlue.value = this.value;
}

outputRed.oninput = function() {
  if (this.value > 255) {
    this.value = 255;
  }
  if (this.value < 0) {
    this.value = 0;
  }
  redSlider.value = this.value;
}

outputGreen.oninput = function() {
  if (this.value > 255) {
    this.value = 255;
  }
  if (this.value < 0) {
    this.value = 0;
  }
  greenSlider.value = this.value;
}

outputBlue.oninput = function() {
  if (this.value > 255) {
    this.value = 255;
  }
  if (this.value < 0) {
    this.value = 0;
  }
  blueSlider.value = this.value;
}


submitButton.addEventListener('click', () => {
  if (won == false) {

    attempt++;

    let rcolorlist = JSON.parse(localStorage.getItem("rcolor"));
    let gcolorlist = JSON.parse(localStorage.getItem("gcolor"));
    let bcolorlist = JSON.parse(localStorage.getItem("bcolor"));
    rcolorlist.push(redSlider.value);
    gcolorlist.push(greenSlider.value);
    bcolorlist.push(blueSlider.value);
    localStorage.setItem("rcolor",JSON.stringify(rcolorlist));
    localStorage.setItem("gcolor",JSON.stringify(gcolorlist));
    localStorage.setItem("bcolor",JSON.stringify(bcolorlist));
    // alert("red color is " + localStorage.getItem("rcolor"));
    localStorage.setItem("attempts", attempt);
    // alert("adding colors " + redSlider.value + " " + greenSlider.value + " " + blueSlider.value);

    addColor(redSlider.value, greenSlider.value, blueSlider.value,attempt);

    if (won == true) {
      // document.querySelector('#leaderboardModal').trigger('focus');
      $('#leaderboardModal').modal('show');
      let scores = localStorage.getItem("scores");
      let gamesPlayed = localStorage.getItem("gamesPlayed");
      let highScore = localStorage.getItem("highScore");
      if (scores == null) {
        scores = 0;
        gamesPlayed = 0;
        highScore = 99999;
      }
      scores = parseInt(scores);
      gamesPlayed = parseInt(gamesPlayed);
      highScore = parseInt(highScore);

      gamesPlayed++;
      scores += parseInt(attempt);
      if (attempt < highScore){
        highScore = attempt;
        // alert("reset high schore");
      }


      localStorage.setItem("scores", scores);
      localStorage.setItem("gamesPlayed", gamesPlayed);
      localStorage.setItem("highScore", highScore);
      updateLeaderBoard();

      localStorage.setItem("won","yes");
    }
  }

})



function getColor(value) {
  //value from 0 to 1
  if (value > 1)
    value = 1;
  var hue = ((1 - value) * 120).toString(10);
  return ["hsl(", hue, ",100%,50%)"].join("");
}

function addColor(r, g, b, a) {
  // alert("addi/ng color");
  let new_color_row = document.createElement("div");
  new_color_row.classList.add("row");
  new_color_row.classList.add("colorrow");
  let red_col = document.createElement("div");
  let green_col = document.createElement("div");
  let blue_col = document.createElement("div");

  let temp_col = document.createElement("div");
  red_col.classList.add("col");
  green_col.classList.add("col");
  blue_col.classList.add("col");
  temp_col.classList.add("col");

  let red_circle = document.createElement("div");
  let green_circle = document.createElement("div");
  let blue_circle = document.createElement("div");
  let temp_circle = document.createElement("div");
  red_circle.classList.add("circle");
  green_circle.classList.add("circle");
  blue_circle.classList.add("circle");
  temp_circle.classList.add("circle");

  red_col.appendChild(red_circle);
  green_col.appendChild(green_circle);
  blue_col.appendChild(blue_circle);
  temp_col.appendChild(temp_circle);

  red_circle.innerHTML = r;
  green_circle.innerHTML = g;
  blue_circle.innerHTML = b;
  temp_circle.innerHTML = colorDistance(r, g, b, red, green, blue);;

  red_circle.style.backgroundColor = getColor(Math.abs(red - r) / 127);;
  green_circle.style.backgroundColor = getColor(Math.abs(green - g) / 127);;
  blue_circle.style.backgroundColor = getColor(Math.abs(blue - b) / 127);;
  temp_circle.style.backgroundColor = ConvertRGBtoHex(parseInt(r), parseInt(g), parseInt(b));

  let color_to_match = document.createElement("div");
  color_to_match.classList.add("col");
  let color_circle = document.createElement("div");
  color_circle.classList.add("circle");
  color_circle.style.backgroundColor = ConvertRGBtoHex(red, green, blue);
  color_circle.innerHTML = a;
  color_to_match.appendChild(color_circle);

  new_color_row.appendChild(red_col);
  new_color_row.appendChild(green_col);
  new_color_row.appendChild(blue_col);
  new_color_row.appendChild(temp_col);
  new_color_row.appendChild(color_to_match);
  colorList.appendChild(new_color_row);

  // var objDiv = document.getElementById("your_div");
  colorList.scrollTop = colorList.scrollHeight;
  if (colorDistance(r, g, b, red, green, blue) <= limit)
    won = true;


}

function colorDistance(colorRed, colorGreen, colorBlue, pixelRed, pixelGreen, pixelBlue) {

  var diffR, diffG, diffB;

  // distance to color
  diffR = (colorRed - pixelRed);
  diffG = (colorGreen - pixelGreen);
  diffB = (colorBlue - pixelBlue);
  return Math.floor(Math.sqrt(diffR * diffR + diffG * diffG + diffB * diffB));

}
