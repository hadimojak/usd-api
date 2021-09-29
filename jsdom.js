import { JSDOM } from 'jsdom';
import nodefetch from 'node-fetch';

async function usdApi() {
  const html = await nodefetch("https://www.tgju.org/profile/price_dollar_rl").then(data => { return data.text(); });
  const dom = new JSDOM(html);
  const { document } = await dom.window;
  const td = Array.from(document.querySelectorAll(`td`)).find(p => { return p.innerHTML === 'بالاترین قیمت روز'; });
  const tdPrice = td.innerHTML;
  const price = td.nextElementSibling.querySelector('span').innerHTML;
  //change to riyal
  const usd = +(price.replace(/,/, '.')) * 1000;
  console.log(`${tdPrice} : `, +usd.toFixed(3));
};


function interval() {
  usdApi();

}

setInterval(interval,3600000)