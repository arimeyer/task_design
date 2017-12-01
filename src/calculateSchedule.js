// item = { id, content, start, end }

const getTimeLines = items => items.reduce((a, { id, start, end }) => a.concat([{ t: start, id, start: true }, { t: end, id }], []))

const sortTimeLines = times => times.slice().sort(
    ({t: t1}, {t: t2}) => {
        if (t1 > t2) {
            return 1
        } else if (t1 == t2) {
            return 0
        } else {
            return -1
        }
    }
)

const getLargestOpening = row => row.reduce(
    (a, item, i) => {
        if (item == "EMPTY") {
            a[a.length - 1].push(i)
            return a 
        } else {
            a.push([])
            return a
        }
    }, []
).filter(
    range => range.length
).sort(
    ({length: length1}, {length: length2}) => {
        if (length1 > length2) {
            return 1
        } else if (length1 == length2) {
            return 0
        } else {
            return -1
        }
    }
).slice(-1).map(
    range => [range[0], range[range.length - 1]]
)[0]


const getFracs = times => times.reduce(
    (a, { id, start }) => {
        const last = a[a.length - 1]
        let newOpen
        if (start) {
            const largestOpening = getLargestOpening(last)
            if (largestOpening) {
                newOpen = last.reduce(
                    (a, item, i) => i >= largestOpening[0] && i <= largestOpening[1]
                        ? a.concat(id)
                        : a.concat(item),
                    []
                )
            } else {
                newOpen = last.concat(id)
            }
        } else {
            newOpen = last
            newOpen[last.indexOf(id)] = "EMPTY"
        }
        a.push(newOpen)
        return a
    }, []
)

export default calculateSchedule = items => {
    const fracs = getFracs(sortTimelines(getTimeLines(items)))
    return items.map(item => ({ ...item, frac: fracs.get(item.id) }))
}




