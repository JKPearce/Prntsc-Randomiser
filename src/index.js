function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 10);
}

function generateLink(){
    const char1 = generateRandomLetter();
    const char2 = generateRandomLetter();
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const num3 = generateRandomNumber();
    const num4 = generateRandomNumber();

    return `https://prnt.sc/${char1}${char2}${num1}${num2}${num3}${num4}`
}

const button = document.getElementById('newPageBtn');

button.addEventListener('click', () => {
  const url = generateLink();
  document.location.href = url;
})