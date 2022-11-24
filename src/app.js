module.exports = new class Scraper {
    constructor() {
        this.request = require('request');
    }
    
    get(url) {
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
} 