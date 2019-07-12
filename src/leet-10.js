// .*..a*
const s = 'a'.split('');
const p = '.*..a*'.split('');

const match = function([...chars], [...patterns]) {
  const [fC, ...tC] = chars;
  const [fP, sP, ...tP] = patterns;
  if (fP === undefined) {
    return fC === undefined;
  }

  if ((fC === fP || fP === '.') && sP !== '*' && fC !== undefined) {
    return match(tC, [sP, ...tP]);
  } else if (sP === '*') {
    return (
      (fC !== undefined && (fC === fP || fP === '.') && match(tC, patterns)) ||
      match(chars, tP)
    );
  } else if (fC !== fP && sP !== '*') {
    return false;
  }
};

console.log(match(s, p));

// [...chars], tP) || ((fC === fP || fP === '.') && chars.length > 0 && match(tC, [...patterns]))
