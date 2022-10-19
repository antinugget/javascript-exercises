const removeFromArray = function(fullArray, toRemove1, toRemove2, toRemove3, toRemove4) {
    let i = 0;
    while (i < fullArray.length) {
        if (fullArray[i] === toRemove1) {
            fullArray.splice(i, 1)
        } else {
            i++
        }
    };

    let j = 0;
    while (j < fullArray.length) {
        if (fullArray[j] === toRemove2) {
            fullArray.splice(j, 1);
        } else {
            j++;
        }
    };
    let k = 0;
    while (k < fullArray.length) {
        if (fullArray[k] === toRemove3) {
            fullArray.splice(k, 1);
        } else {
            k++;
        }
    };
    let l = 0;
    while (l < fullArray.length) {
        if (fullArray[l] === toRemove4) {
            fullArray.splice(l, 1);
        } else {
            l++;
        }
    };
    return fullArray
};

// Do not edit below this line
module.exports = removeFromArray;
