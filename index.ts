import { convert, get, querySelectorAll } from "./src/scraper";

get("https://wikipedia.net").then((body) => {
    querySelectorAll(convert(body), "a").forEach((a) => {
        if(a.getAttribute("href") !== null) {
            get(a.getAttribute("href") as string).then((body) => {
                console.log(body);
            }).catch(() => console.log("error"));
        }
    });
})

