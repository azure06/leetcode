const s = `PAYPALISHIRING`;
const numRows = 4;

var convert = function(s, numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    result.push('');
  }
  for (let j = 0; s.length > 0; j++) {
    const distance = numRows - 1 > 0 ? j % (numRows - 1) : 0;
    for (let i = 0; i < numRows; i++) {
      if (distance === 0 || numRows - distance - 1 === i) {
        if (s[0]) {
          result[i] = result[i] + s[0];
        } else {
          break;
        }
        s = s.slice(1);
      }
    }
  }
  return result.join('');
};

console.log(convert(s, numRows));
