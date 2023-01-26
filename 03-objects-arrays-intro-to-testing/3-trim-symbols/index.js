/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) return "";
  else if (!size) return string;

  let counter = 0;
  let resultString = "";
  string.split("").forEach((symbol) => {
    if (resultString[resultString.length - 1] === symbol) {
      counter++;
      if (counter <= size) resultString += symbol;
    } else {
      counter = 1;
      resultString += symbol;
    }
  });
  return resultString;
}
