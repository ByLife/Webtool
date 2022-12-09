export const querySelectorAll = (document: Document, selector: string) : NodeListOf<Element> => {
    return document.querySelectorAll(selector);
}