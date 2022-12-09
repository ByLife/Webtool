import { isStringObject } from "util/types"

export const querySelectorRegex = (element: Document, selector: string , regex: RegExp) : Element[] | null => {
    var elements: Element[] = [];
    element.querySelectorAll(selector).forEach((element) => {
        if(isStringObject(element.textContent)){
            if(element.textContent.match(regex)){
                elements.push(element);
            }
        }
    })
    if(elements.length > 0) return elements
    return null
}
