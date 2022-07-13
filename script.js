// function wordCount() {
//   let wordscount = document.getElementById('wordscount');
//   let words = document.getElementById('words');
//   let wordcount = wordscount.textContent.split(' ');

//   for (let i = 0; i < wordcount.length; i++) {

//     if (wordcount == 0) {

//       words.style.display = 'block';
//       words.innerText = 'Type some words to count'

//     } else {

//       words.style.display = 'block';
//       wordcount += 1;
//       words.innerText = `The Number of Words Typed: ${wordcount}`;
//       console.log(wordcount)

//     }
//   }
//   return wordcount
// }


let countBtn = document.querySelector('count')
let wordscount = document.querySelector('wordscount')

let count = 0;


let countWords = wordscount.textContent.split(' ');

for (let i = 0; i < countWords.length; i++) {
  count += countWords[i];
  console.log(count);
}