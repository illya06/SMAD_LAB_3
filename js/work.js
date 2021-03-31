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
    document.getElementById('midStatistical').innerHTML = `<kbd>${midStat.toFixed(3)}</kbd>`;
}

//дисперсія
function calcDispersion() {
    intervalToFrequency.forEach((frequency, interv) => {
        dispersion += (Math.pow(((interv[0] + interv[1]) / 2) - midStat, 2) * frequency) / numbers.length;
    });
    document.getElementById('dispersion').innerHTML = ` <kbd>${dispersion.toFixed(3)}</kbd>`;
}

//середнє квадратичне відхилення
function calcStandardDeviation() {
    stdDeviation = Math.sqrt(dispersion);
    document.getElementById('standardDeviation').innerHTML =
        `<kbd>${stdDeviation.toFixed(3)}</kbd>`;
}

function calcIntEstimate() {
    calcInternalValues();
    let retVal = `<kbd>${
                (midStat - (stdDeviation * t_l / Math.sqrt(numbers.length))).toFixed(2)
            } <= m <= ${
                (midStat + stdDeviation * t_l / Math.sqrt(numbers.length)).toFixed(2)
            } </kbd>`;
    document.getElementById('intEstimate').innerHTML = retVal;
}

function calcNoDispIntEstimate() {
    calcInternalValues();
    let retVal = `<kbd>${
                (midStat - (stdDeviation * t_s / Math.sqrt(numbers.length))).toFixed(2)
            } <= m <= ${
                (midStat + stdDeviation * t_s / Math.sqrt(numbers.length)).toFixed(2)
            } </kbd>`;
    document.getElementById('noMSIntEstimate').innerHTML = retVal;
}

function calcInternalValues(){
    switch (rel) {
        case '0.999':
            t_l = 3.3;
            t_s = 3.56;
            break;
        case '0.99':
            t_l = 2.6;
            t_s = 2.71;
            break;
        case '0.95':
            t_l = 1.96;
            t_s = 2.02;
            break;
    }
}





