module.exports = new class Scraper {
    constructor() {
        this.request = require('request');
        this.url = "";
    }
    
    get(url) {
        this.url = url;
        return new Promise((resolve, reject) => {
            this.request(url, (error, response, body) => {
                if (error) reject(error)
                else resolve(body);
            });
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this.request.post(url, {form: data}, (error, response, body) => {
                if (error) reject(error)
                else resolve(body);
            });
        });
    }

    querySelectorAll(html, selector) {
        const jsdom = require('jsdom');
        const { JSDOM } = jsdom;
        const dom = new JSDOM(html);
        return dom.window.document.querySelectorAll(selector);
    }

    querySelector(html, selector) {
        const jsdom = require('jsdom');
        const { JSDOM } = jsdom;
        const dom = new JSDOM(html);
        return dom.window.document.querySelector(selector);
    }

    getLinks(html) {
        const links = this.querySelectorAll(html, 'a');
        return links
    }

    getImagesSource(html) {
        const src = this.querySelectorAll(html, 'img');
        return src.forEach(src => console.log(src.src));
    }

    scrapAllLinks(html) {
        const links = this.querySelectorAll(html, 'a');
        var content = [];
        content.push(links.forEach(link => content.push(link.href)));
        links.forEach(link => {
            this.get(this.url + link.href).then(html => {
                content.push(links.forEach(link => content.push(link.href)));
            })
        });
        return content
    }

    getQuerySelectorRegex(html, selector, regex) {
        const jsdom = require('jsdom');
        const { JSDOM } = jsdom;
        const dom = new JSDOM(html);
        var regex = new RegExp(regex);
        return dom.window.document.querySelectorAll(selector).forEach(element => {
            if (regex.test(element.innerHTML)) {
                console.log(element.innerHTML);
            }
        });   
    }

    convertHtmlToNode(html) {
        const jsdom = require('jsdom');
        const { JSDOM } = jsdom;
        const dom = new JSDOM(html);
        return dom.window.document;
    }
} 