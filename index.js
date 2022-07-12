function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function titleCase(sentence) {
    const words = sentence.split(' '); //splits sentence into array
    const final = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); //splits each word into array and capitalizes first letter
    return final.join(' ')
}
module.exports = { reverseWords, titleCase };
