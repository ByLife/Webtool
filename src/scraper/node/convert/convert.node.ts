import jsdom from 'jsdom';

export const convert = (html: string) : Document => {
    const { JSDOM } = jsdom;
    const dom = new JSDOM(html);
    return dom.window.document;
}