function parseDate(str) {
    let dateObj = typeof str === 'object' ? str : new Date(str)
    let time = dateObj.getTime()
    let now = Date.now()
    let gap = now - time
    let msg = ''

    switch (true) {
        case gap < 60000:
            msg = 'just now'
            break
        case gap < 1000 * 3600:
            msg = Math.floor(gap / 60000) + 'mins ago'
            break
        case gap < 1000 * 3600 * 24:
            msg = Math.floor(gap / 1000 / 3600) + 'hours ago'
            break
        default:
            msg = Math.floor(gap / 1000 / 3600 / 24) + 'days ago'
    }

    return msg
}

export default {
    install(Vue) {
        Vue.prototype.parseDate = parseDate
    }
}