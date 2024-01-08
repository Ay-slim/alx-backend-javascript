export default function cleanSet(set, startString) {
  const stringsArr = [];
  set.forEach((word) => {
    if (startString && word.startsWith(startString) && word.length > startString.length) {
      stringsArr.push(word.substr(startString.length, word.length));
    }
  });
  return stringsArr.join('-');
}
