import {ALPHABET, MAP} from "./contants";

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateWord(letterCount) {
  let result = randomItem(ALPHABET);
  
  for (let i = 1; i < letterCount; i++) {
    // Get character map
    const characters = MAP[result[result.length - 1]];
    const nextCharacter = randomItem(characters);
    
    result += nextCharacter;
  }
  
  // Uppercase first character
  return result[0].toUpperCase() + result.slice(1);
}
