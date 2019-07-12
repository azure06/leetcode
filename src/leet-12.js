/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num - thousands * 1000) / 100);
  const tens = Math.floor((num - thousands * 1000 - hundreds * 100) / 10);
  const units = num - thousands * 1000 - hundreds * 100 - tens * 10;

  let result = '';

  if (thousands !== 0) {
    for (let i = 0; i < thousands; i++) {
      result += 'M';
    }
  }

  if (hundreds === 9) {
    result += 'CM';
  } else if (hundreds >= 5) {
    result += 'D';
    for (let i = 0; i < hundreds - 5; i++) {
      result += 'C';
    }
  } else if (hundreds === 4) {
    result += 'CD';
  } else if (hundreds !== 0) {
    for (let i = 0; i < hundreds; i++) {
      result += 'C';
    }
  }

  if (tens === 9) {
    result += 'XC';
  } else if (tens >= 5) {
    result += 'L';
    for (let i = 0; i < tens - 5; i++) {
      result += 'X';
    }
  } else if (tens === 4) {
    result += 'XL';
  } else if (tens !== 0) {
    for (let i = 0; i < tens; i++) {
      result += 'X';
    }
  }

  if (units === 9) {
    result += 'IX';
  } else if (units >= 5) {
    result += 'V';
    for (let i = 0; i < units - 5; i++) {
      result += 'I';
    }
  } else if (units === 4) {
    result += 'IV';
  } else if (units !== 0) {
    for (let i = 0; i < units; i++) {
      result += 'I';
    }
  }

  return result;
};
