let myWindow;
let myTimer;
let time = 2 * 1000;//2 seconds

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

function openNewLink(){
  if(!myWindow.closed){
    const url = generateLink();
    const linkList = document.getElementById('links');
    const linkEl = document.createElement('li');
    const link = document.createElement('a');

    link.href = url;
    link.innerText = url;
    link.target = "_blank";

    console.log(myWindow);
    myWindow.location = url;
    linkEl.appendChild(link);
    linkList.appendChild(linkEl);
  }
}

const button = document.getElementById('newPageBtn');

button.addEventListener('click', () => {
  myWindow = window.open(generateLink());
  myTimer = setInterval(openNewLink, time);
})