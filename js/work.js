//this here sets intervalToFrequency with values
for (var i = minVal; i < len * r; i += len) {
    var ammountInInterval = 0;
    numbers.forEach(num => {
        if (i != len * r - minVal) {
            if (num >= i && num < i + len)
                ammountInInterval += 1;
        } else {
            if (num >= i && num <= i + len)
                ammountInInterval += 1;
        }
    })
    intervalToFrequency.set([i, i + len], ammountInInterval);
}

//середнє статистичне
function calcMidStatistical() {
    intervalToFrequency.forEach((frequency, interv) => {
        midStat += (((interv[0] + interv[1]) / 2) * frequency) / numbers.length;
    });
    document.getElementById('midStatistical').innerHTML = ` <kbd>${midStat.toFixed(3)}</kbd>`;
}

//дисперсія
function calcDispersion() {
    intervalToFrequency.forEach((frequency, interv) => {
        dispersion += (Math.pow(((interv[0] + interv[1]) / 2) - midStat, 2) * frequency) / numbers.length;
    });
    document.getElementById('dispersion').innerHTML = ` <kbd>${dispersion.toFixed(3)}</kbd>`;
}

//середнє квадратичне відхилення
function calcStandardDeviation(){
    stdDeviation = Math.sqrt(dispersion);
    document.getElementById('standardDeviation').innerHTML =
        ` <kbd>${stdDeviation.toFixed(3)}</kbd>`;
}









