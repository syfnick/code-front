let debug = process.env.NODE_ENV !== 'production'

let imgDomain
let apiDomain
if (process.env.NODE_ENV === 'production') {
    imgDomain = 'http://120.79.29.47'
    apiDomain = 'https://runcodeapi.yunser.com'
} else {
    imgDomain = 'http://120.79.29.47'
    apiDomain = 'https://runcodeapi.yunser.com'
}

module.exports = {
    imgDomain,
    apiDomain,
    debug
}
