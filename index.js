const Scrap = require('./src/app');

async function main() {
    const url = 'https://www.ruby-lang.org/en/about/license.txt';
    const html = await Scrap.get(url);
    console.log(html);
}

main()