const Scrap = require('./src/app');

async function main() {
    const url = 'https://fr.wikipedia.org/wiki/Wiki';
    const html = await Scrap.get(url);
    const links = Scrap.scrapAllLinks(html)
    console.log(links);
}

main()