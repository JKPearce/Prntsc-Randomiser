const puppeteer = require('puppeteer');

async function scrapePage(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('/html/body/div[3]/div/img');
  const src = await el.getProperty('src');
  const srcTxt = await src.jsonValue();
  console.log(srcTxt);

  await browser.close();
}