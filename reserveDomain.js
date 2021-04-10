const array = ["g", "o", "o", "g", "l", "e", ".", "c", "o", ".", "i", "d"];

const reverseDomain = (arr) => {
  const a = arr.join("");

  var nameSplit = a.split(".").reverse();

  const name = nameSplit.toString();

  const result = name.replace(/,/g, ".");
  return result.split("");
};

console.log(reverseDomain(array));
