function decodeMorse(str) {
	const morseCode = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
  " ": "NEW_CHR",
  "---...": ":",
  ".----.": "'",
  "  ": "NEW_WRD"
};

message = str.split("  ");

let decodedStr = "";

for (let i = 0; i < message.length; i++) {
  let word = message[i];
  word = word.split(" ");

  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (morseCode[letter] === undefined) {
      decodedStr += " ";
    } else {
      decodedStr += morseCode[letter];
    }
  }
}
return decodedStr.toUpperCase()

}