const wordscount = document.querySelector('#wordscount');
let countBtn = document.getElementById('countBtn');
let alertCopied = document.querySelector('#alert-copied');
let alertErr = document.querySelector('#alert-err');
let wordsDisplay = document.querySelector('#words');

wordscount.addEventListener('input', () => {

  let count = wordscount.value;

  wordsDisplay.style.display = 'flex';
  if (count === '') {

    wordsDisplay.style.display = 'none';

  }

  wordsDisplay.innerHTML = 'Total Words Types: ' + getWordCount(count);

});


function getWordCount(str) {

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
