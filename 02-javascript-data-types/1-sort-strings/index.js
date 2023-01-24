/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  const resultArray = [...arr];

  if (param === "asc") {
    return resultArray.sort((a, b) =>
      a.localeCompare(b, "ru", { caseFirst: "upper" })
    );
  } else if (param === "desc") {
    return resultArray.sort((a, b) =>
      b.localeCompare(a, "ru", { caseFirst: "upper" })
    );
  }
}
