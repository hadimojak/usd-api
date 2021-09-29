import puppeteer from 'puppeteer';

(async () => {
  const start = Date.now()
  const browser = await puppeteer.launch({ headless: true, ignoreHTTPSErrors: true, userDataDir: './my/path' });
  const page = await browser.newPage();
  page.goto('https://www.tgju.org/profile/price_dollar_rl');
  await page.waitForSelector('.price');
  const usd = await page.evaluate(() => {
    return document.querySelector(".price").innerHTML;
  });
  await console.log(+(usd.replace(/,/, '.')) * 1000);
  const stop = Date.now()
  console.log(`Time Taken to execute = ${(stop - start)/1000} seconds`);

  process.exit(1);

})();




