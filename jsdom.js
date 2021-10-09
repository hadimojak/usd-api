import nodefetch from 'node-fetch';

let price;

try {
    async function usdApi() {


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
                    if (key === 'h') {
                        price = data[key];
                        console.log(parseFloat(price.replace(/,/, '.')) * 1000)
                    }
                }
            }).catch(err => { console.log(err); });

    };

    usdApi();

    // setInterval(() => { usdApi(); }, 1500);


} catch (error) {
    console.log(error.message);
}


