function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function titleCase(sentence) {
  const words = sentence.split(" "); //splits sentence into array
  const final = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  ); //splits each word into array and capitalizes first letter
  return final.join(" ");
}

function oddishOrEvenish(number) {
  const digits = number
    .toString()
    .split("") // stringifying numbers in order to split them apart
    .map((digit) => Number(digit)) // mapping over each digit to turn it back to an actual number
    .reduce((acc, curr) => acc + curr);
  return digits % 2 ? "Oddish" : "Evenish";
}

function at(arr, index) {
    return index > -1 ? arr[index] : arr[arr.length + index];
}

module.exports = { reverseWords, titleCase, oddishOrEvenish, at };
