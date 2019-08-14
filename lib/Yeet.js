'use strict';

function reverse(str) {
  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  for (var x = 0; x < str.length; x++) {
    if (UPPER.indexOf(str[x]) !== -1) {
      result.push(str[x].toLowerCase());
    } else if (LOWER.indexOf(str[x]) !== -1) {
      result.push(str[x].toUpperCase());
    } else {
      result.push(str[x]);
    }
  }
  return result.join('');
}

function splt(str) {
  var result;
  result = str.split(/(\d+)/);
  return result;
}

function checknum(str) {
  var result = false;
  if (str.match(/(\d+)/) !== null) {
    result = true;
  }
  return result;
}

function strToYeet(str) {
  str = reverse(str);

  let data = Buffer.from(str, 'utf-8');
  var result = '';
  var bindt;

  for (let index = 0; index < data.length; index++) {
    if (
      (data[index] > 64 && data[index] < 91) ||
      (data[index] > 96 && data[index] < 123)
    ) {
      //A-Z & a-z
      bindt = (data[index] - 64).toString(2);
      bindt = bindt.replace(/0/g, 'E');
      bindt = bindt.replace(/1/g, 'e');
      result += `Y${bindt}t `;
    } else if (data[index] > 31 && data[index] < 65) {
      // space - / & : - @
      bindt = (data[index] - 31).toString(2);
      bindt = bindt.replace(/0/g, 'E');
      bindt = bindt.replace(/1/g, 'e');
      result += `Yy${bindt}t `;
    } else if (data[index] > 90 && data[index] < 97) {
      //[ - `
      bindt = (data[index] - 90).toString(2);
      bindt = bindt.replace(/0/g, 'E');
      bindt = bindt.replace(/1/g, 'e');
      result += `YYY${bindt}t `;
    } else if (data[index] > 122 && data[index] < 127) {
      //{ - ~
      bindt = (data[index] - 122).toString(2);
      bindt = bindt.replace(/0/g, 'E');
      bindt = bindt.replace(/1/g, 'e');
      result += `YyY${bindt}t `;
    } else {
      //if doesnt exist like my GF
      result += `YET `;
    }
  }

  return result;
}

//for number
function numToYeet(num) {
  num = parseInt(num);
  var result = '';
  var bindt;
  bindt = num.toString(2);
  bindt = bindt.replace(/0/g, 'E');
  bindt = bindt.replace(/1/g, 'e');
  result = `y${bindt}t `;
  return result;
}

function Yeet(str, type = 0) {
  var result = ``;
  if (type === 0) {
    result = strToYeet(str);
    return result;
  } else if (type === 1) {
    if (checknum(str)) {
      str = splt(str);
      str.forEach(str1 => {
        if (checknum(str1)) {
          result += numToYeet(str1);
        } else result += strToYeet(str1);
      });
      return result;
    } else {
      result = strToYeet(str);
      return result;
    }
  } else return null;
}

function yeeT(str) {
  var bytArr = [];
  var i = 0;
  var result = '';
  str = str.split(' ');
  str.forEach(str1 => {
    console.log(str1);

    var YIT = str1.substring(0, 3);
    var bindt;
    var t = true;

    if (YIT.match(/YyY/gm) !== null) {
      bindt = str1.match(/e*e/i)[0];
      bindt = bindt.replace(/E/g, '0');
      bindt = bindt.replace(/e/g, '1');
      bindt = parseInt(bindt, 2) + 122;
    } else if (YIT.match(/YYY/gm) !== null) {
      bindt = str1.match(/e*e/i)[0];
      bindt = bindt.replace(/E/g, '0');
      bindt = bindt.replace(/e/g, '1');
      bindt = parseInt(bindt, 2) + 90;
    } else if (YIT.match(/Yy/gm) !== null) {
      bindt = str1.match(/e*e/i)[0];
      bindt = bindt.replace(/E/g, '0');
      bindt = bindt.replace(/e/g, '1');
      bindt = parseInt(bindt, 2) + 31;
    } else if (YIT.match(/Y/gm) !== null) {
      bindt = str1.match(/e*e/i)[0];
      bindt = bindt.replace(/E/g, '0');
      bindt = bindt.replace(/e/g, '1');
      bindt = parseInt(bindt, 2) + 64;
    } else if (YIT.match(/y/gm) !== null) {
      bindt = str1.match(/e*e/i)[0];
      bindt = bindt.replace(/E/g, '0');
      bindt = bindt.replace(/e/g, '1');
    } else {
      t = false;
    }

    if (t) {
      bytArr[i] = bindt;
    }

    i++;
  });

  i = 0;
  bytArr.forEach(dt => {
    if (typeof dt === 'number') {
      result += String.fromCharCode(bytArr[i]);
    } else if (typeof dt === 'string') {
      result += parseInt(dt, 2);
    }
    i++;
  });
  result = reverse(result);
  return result;
}

exports.Yeet = function(str) {
  Yeet(str);
};

exports.yeeT = function(str) {
  yeeT(str);
};
