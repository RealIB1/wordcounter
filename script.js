const wordscount = document.querySelector('#wordscount');
let countBtn = document.getElementById('countBtn');
let alertCopied = document.querySelector('#alert-copied');
let alertErr = document.querySelector('#alert-err');
let words = document.querySelector('#words');
let chars = document.querySelector('#chars');
let displayS = document.querySelector('#display');

wordscount.addEventListener('input', () => {

  let count = wordscount.value;

  displayS.style.display = 'flex';

  if (count === '' || chars === '') {

    displayS.style.display = 'none';

  }

  words.innerHTML = 'Total words count: ' + getWordCount(count);
  chars.innerHTML = 'Total character count: ' + getCharsCount(count);

});

const getCharsCount = (count) => {
  
    return count.length;
}


const getWordCount = (str) => {

  return str.trim().split(/\s+/).length;

}

countBtn.addEventListener('click', function () {
  navigator.clipboard.writeText(wordscount.value);

  if (wordscount.value === '') {
    alertErr.style.display = 'flex';
  } else {

    alertCopied.style.display = 'flex';
  
  }

  setTimeout(() => {

    alertCopied.style.display = 'none';
    alertErr.style.display = 'none';

  }, 5000);
});
