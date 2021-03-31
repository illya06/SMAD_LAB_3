//numbers =  0.14 0.28 0.31 0.57 0.65 0.78 0.42 0.47 0.60 0.91 0.65 0.79 0.57 0.34 0.25 0.01 0.03 0.28 0.33 0.33 0.14 0.25 0.31 0.36 0.65 0.65 0.70 0.42 0.47 0.60 0.03 0.24 0.33 0.33 0.38 0.63 0.79 0.55 0.34 0.14
var numbers = (document.getElementById('numbers').value)
    .split(" ")
    .map(Number)
    .filter(Boolean);

//reliability and values wich come with it
var rel = document.getElementById('reliability').value;
var t_s, t_l;

//Sterjeet`s number
var r = 1 + 3.322 * Math.log10(numbers.length);

//extreemes
var minVal = numbers.reduce((a, b) => Math.min(a, b));
var maxVal = numbers.reduce((a, b) => Math.max(a, b));

//length of intervals
var len = (maxVal - minVal) / r;

//middle of interval <-> frequency - map
var intervalToFrequency = new Map();

//ammount of numbers
var ammount = numbers.length;


var midStat = 0;
var dispersion = 0;
var stdDeviation = 0;