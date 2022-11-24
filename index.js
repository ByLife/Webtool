const Scrap = require('./src/app');

async function main() {
    const url = 'https://fr.wikipedia.org/wiki/Wiki';
    const html = await Scrap.get(url);
    const links = Scrap.querySelectorAll(html, 'p').forEach(link => console.log(link.hasChildNodes()));
    console.log(Scrap.querySelector(html, 'title').textContent)
}

main()
