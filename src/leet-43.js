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

/*
public String multiply(String num1, String num2) {
    int m = num1.length(), n = num2.length();
    int[] pos = new int[m + n];

    for(int i = m - 1; i >= 0; i--) {
        for(int j = n - 1; j >= 0; j--) {
            int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
            int p1 = i + j, p2 = i + j + 1;
            int sum = mul + pos[p2];

            pos[p1] += sum / 10;
            pos[p2] = (sum) % 10;
        }
    }

    StringBuilder sb = new StringBuilder();
    for(int p : pos) if(!(sb.length() == 0 && p == 0)) sb.append(p);
    return sb.length() == 0 ? "0" : sb.toString();
}
*/
