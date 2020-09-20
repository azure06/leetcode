/**
 * 43. Multiply Strings (Facebook)
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return '0';
  }
  if (num2.length > num1.length) {
    const tmp = num1;
    num1 = num2;
    num2 = tmp;
  }

  let total = '0';
  for (let i = num2.length - 1; i >= 0; i--) {
    let result = '';
    let carried = 0;
    for (let j = num1.length - 1; j >= -1; j--) {
      const [...tail] = '' + ((+num2[i] || 0) * (+num1[j] || 0) + carried);
      tail.reverse();
      if (j === -1 && !carried) {
        break;
      }
      result = tail[0] + result;
      carried = +tail[1] || 0;
    }

    for (let k = num2.length - (i + 1); k > 0; k--) {
      result += '0';
    }
    total = sum(total, result);
  }
  return total;
};

const sum = (num1, num2) => {
  if (num2.length > num1.length) {
    const tmp = num1;
    num1 = num2;
    num2 = tmp;
  }
  let result = '';
  let num3 = '';
  num1 = num1
    .split('')
    .reverse()
    .join('');
  num2 = num2
    .split('')
    .reverse()
    .join('');
  for (let i = 0; i <= num1.length; i++) {
    const [...tail] = '' + ((+num1[i] || 0) + (+num2[i] || 0) + (+num3 || 0));
    tail.reverse();
    if (i === num1.length && !num3) {
      break;
    }
    result = tail[0] + result;
    num3 = tail[1] || '';
  }

  return result;
};

/* Another solution maybe not perfect but looks better than the previous one
 var multiply = function (num1, num2) {
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  let result = "0";
  for (let i = 0; i < num1.length; i += 1) {
    let res = "";
    let carry = 0;
    for (let j = 0; j < num2.length; j += 1) {
      const value = ("0" + ((+num1[i] || 0) * (+num2[j] || 0) + carry)).slice(
        -2
      );
      res = value[1] + res;
      carry = +value[0] || 0;
    }
    let zeros = "";
    for (let k = 0; k < i; k += 1) {
      zeros += "0";
    }
    result = add(result, (carry > 0 ? carry + res : res) + zeros);
  }
  return result;
};

const add = function (num1, num2) {
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  const length = num1.length > num2.length ? num1.length : num2.length;
  let result = "";
  let carry = 0;
  for (let i = 0; i < length; i += 1) {
    const value = ("0" + ((+num1[i] || 0) + (+num2[i] || 0) + carry)).slice(-2);
    result = value[1] + result;
    carry = +value[0] || 0;
  }
  return carry > 0 ? carry + result : result;
};

console.warn(multipy("123", "456"));
console.warn(123 * 456);

*/
