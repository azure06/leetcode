/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let line = [];
  const result = [];
  for (let i = 0; i < words.length; i += 1) {
    line.push(words[i]);
    if (line.join(' ').length > maxWidth) {
      // if exceed the length remove 1 word
      line.pop();
      i -= 1;

      // Space that must be filled
      const spaceLength = maxWidth - line.join('').length;
      if (line.length === 1) {
        result.push(line[0] + new Array(spaceLength + 1).join(' '));
      } else {
        // if even space
        let tmp = '';
        if (spaceLength % (line.length - 1) === 0) {
          const spEach = new Array(spaceLength / (line.length - 1) + 1).join(
            ' '
          );
          for (let j = 0; j < line.length; j += 1) {
            tmp += line[j] + spEach;
          }
        } else {
          const spEach = new Array(
            Math.floor(spaceLength / (line.length - 1)) + 1
          ).join(' ');
          const extraSpace = spaceLength % (line.length - 1);
          for (let j = 0; j < line.length; j += 1) {
            tmp += line[j] + spEach + (j < extraSpace ? ' ' : '');
          }
        }
        result.push(tmp.trim());
      }
      line = [];
    } else if (words[i + 1] === undefined) {
      let tmp = line.join(' ');
      for (let i = tmp.length; i < maxWidth; i += 1) {
        tmp += ' ';
      }
      result.push(tmp);
    }
  }
  return result;
};

console.warn(fullJustify(['This'], 16));
