/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr) return [];

  return arr.reduce((acc, currentValue) => {
    if (acc.includes(currentValue)) return acc;
    return [...acc, currentValue];
  }, []);
}
