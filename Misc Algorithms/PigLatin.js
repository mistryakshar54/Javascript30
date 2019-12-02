// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end.
// Input strings are guaranteed to be English words in all lowercase.
//translatePigLatin("paragraphs") should return "aragraphspay"
// translatePigLatin("eight") should return "eightway".

function translatePigLatin(str) {
  let vovels = ["a", "e", "i", "o", "u"];
  let minIndex = -1;
  vovels.forEach((vovel, index) => {
    let matchIndex = str.indexOf(vovel);
    if (matchIndex > -1) {
      if (minIndex == -1 || matchIndex < minIndex) {
        minIndex = matchIndex;
      }
    }
  });
  return (
    str.substring(minIndex) +
    str.substring(0, minIndex) +
    (minIndex == 0 ? "way" : "ay")
  );
}
translatePigLatin("paragraphs");
