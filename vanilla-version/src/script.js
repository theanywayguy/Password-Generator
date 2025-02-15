const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lowercaseAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseAlphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "_",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ";",
  ":",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];

function randomize() {
  let password = [];

  while (password.length < 10) {
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomsmall =
      lowercaseAlphabets[Math.floor(Math.random() * lowercaseAlphabets.length)];
    const randombig =
      uppercaseAlphabets[Math.floor(Math.random() * uppercaseAlphabets.length)];
    const randomsymbol = symbols[Math.floor(Math.random() * symbols.length)];

    password.push(randomNumber, randombig, randomsmall, randomsymbol);

    if (password.length > 10) {
      password = password.slice(0, 10);
    }
  }
  return password.join("");
}

const button = document.getElementById("generateButton");
button.addEventListener("click", () => {
  const textfield = document.getElementById("field");
  textfield.value = randomize();
});
