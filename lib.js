function sum(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) s += numbers[i];
    return s;
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    let m = numbers[0];
    for (let i = 1; i < numbers.length; i++) if (m < numbers[i]) m = numbers[i];
    return m;
}

function med(numbers) {
    let mediIndex = numbers.length / 2;
    numbers.sort((a, b) => { return a - b; });
    if (numbers.length % 2 === 1) return numbers[mediIndex - 0.5];
    else {
        return avg(numbers.slice(mediIndex-1, mediIndex+1));
    }
}

function iqr(numbers) {
    let mediIndex = numbers.length / 2;
    let s1, s2;
    numbers.sort((a, b) => { return a - b; });
    if (numbers.length % 2 === 1) {
        s1 = numbers.slice(0, mediIndex - 0.5);
        s2 = numbers.slice(mediIndex+0.5, numbers.length);
    } else {
        s1 = numbers.slice(0, mediIndex);
        s2 = numbers.slice(mediIndex, numbers.length);
    }
    return med(s2) - med(s1);
}

function outliner(numbers) {
    let ol = [];
    let mediIndex = numbers.length / 2;
    let s1, s2;
    let sortNumbers = numbers.slice(0, numbers.length);
    sortNumbers.sort((a, b) => { return a - b; });
    
    if (sortNumbers.length % 2 === 1) {
        s1 = sortNumbers.slice(0, mediIndex - 0.5);
        s2 = sortNumbers.slice(mediIndex+0.5, numbers.length);
    } else {
        s1 = sortNumbers.slice(0, mediIndex);
        s2 = sortNumbers.slice(mediIndex, numbers.length);
    }
    let smallOutliner = med(s1) - 1.5 * iqr(sortNumbers);
    let bigOutlliner =  med(s2) + 1.5 * iqr(sortNumbers);

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < smallOutliner || numbers[i] > bigOutlliner) ol.push(numbers[i]);
    }
    return ol;
}

exports.sum = sum;
exports.avg = avg;
exports.max = max;
exports.med = med;
exports.iqr = iqr;
exports.outliner = outliner;