import { JSDOM } from 'jsdom';
import nodefetch from 'node-fetch';
import fs from 'fs';

let price;

try {
    async function usdApi() {

        // const html = await nodefetch("https://www.tgju.org/profile/price_dollar_rl").then(data => {
        //     // console.log(data);
        //     return data.text();
        // }).catch(err => { console.log(err); });
        // const dom = new JSDOM(html);
        // const { document } = await dom.window;
        // // const td = Array.from(document.querySelectorAll(`td`)).find(p => { return p.innerHTML === 'بالاترین قیمت روز'; });
        // // const price = td.nextElementSibling.querySelector('span').innerHTML;
        // const price = document.querySelector(`#main > div.stocks-profile > div.fs-row.bootstrap-fix.widgets.full-w-set > 
        // div > div.tgju-widgets-block.col-md-12.col-lg-4.tgju-widgets-block-bottom-unset.overview-first-block > div > 
        // div:nth-child(1) > div > div.tables-default.normal > table > tbody > tr:nth-child(1) > td.text-left`).innerHTML;
        // if (isNaN(parseFloat(price))) {
        //     //change to riyal
        //     throw new Error('type of given value is not a number');
        // } else {
        //     const usd = parseFloat(price.replace(/,/, '.')) * 1000;
        //     console.log(usd);
        // }

        const jsonData = await nodefetch(`https://call5.tgju.org/ajax.json?${Math.random(2).toString().substring(2) + Math.random().toString(32).substring(2, 15)}`)
            .then(response => { return response.json(); })
            .then(data => {
                for (let key in data.current) {
                    if (key === 'price_dollar_rl') {
                        console.log(data.current[key]);

                        return data.current[key];
                    }
                }
            }).then(data => {
                for (let key in data) {
                    if (key === 'p') {
                        console.log(data[key]);
                        price = data[key];
                        console.log(parseFloat(price.replace(/,/, '.')) * 1000)
                    }
                }
            }).catch(err => { console.log(err); });

    };

    // usdApi();

    setInterval(() => { usdApi(); }, 1500);


} catch (error) {
    console.log(error.message);
}


