const request = require("request")

const get = (uri) => {
    return new Promise((resolve, rejects) => {
        request.get(uri, null, (err, _, body) => {
            if(err) rejects(err)
            resolve(body)
        })
    })
}

get("https://googfa").catch(() => console.log("Didn't work"))

console.log("Chibgn zadazzda")

setTimeout(() => {
    console.log("La zdazaddaz")
}, 10000)