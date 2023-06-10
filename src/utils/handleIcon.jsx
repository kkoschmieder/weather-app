const iconmap = new Map()

setData([0, 1], 'clear-day');
setData([2], 'partly-cloudy-day');
setData([3], 'cloudy')
setData([45, 48], 'fog')
setData([51, 53, 55], 'drizzle')
setData([61, 63, 65, 80, 81, 82, 85, 86], 'rain')
setData([71, 73, 75, 77], 'snow')
setData([95, 96, 99], 'thunderstorm')

function setData(keys, icon) {
    keys.forEach(key => {
        iconmap.set(key, icon)
    })
}

export default iconmap;