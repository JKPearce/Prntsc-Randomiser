const puppeteer = require("puppeteer");

async function scrapePage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x("/html/body/div[3]/div/img");
  const src = await el.getProperty("src");
  const srcTxt = await src.jsonValue();
  console.log(srcTxt);

  await browser.close();
}

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateLink() {
  const char1 = generateRandomLetter();
  const char2 = generateRandomLetter();
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const num3 = generateRandomNumber();
  const num4 = generateRandomNumber();

  return `https://prnt.sc/${char1}${char2}${num1}${num2}${num3}${num4}`;
}

scrapePage(generateLink());