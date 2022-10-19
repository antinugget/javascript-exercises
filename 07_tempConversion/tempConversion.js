const ftoc = function(temp) {
  if (typeof temp != "number") {
    return 'ERROR'
  }
  let tempC = (temp - 32) * 5/9;
  tempC = Math.round(tempC * 10)/10;
  return tempC
};

const ctof = function(temp) {
  if (typeof temp != "number") {
    return 'ERROR'
  }
  let tempF = temp * 9/5 + 32;
  tempF = Math.round(tempF * 10)/10;
  return tempF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
