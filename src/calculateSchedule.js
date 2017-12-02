// item = { id, content, start, end }

const getTimeLines = items => items.reduce(
    (a, { id, start, end }) => a.concat([{ t: start, id, start: true }, { t: end, id }], [])
)

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


const getFrames = times => times.reduce(
    (a, { id, start }) => {
        const last = a[a.length - 1]
        let newOpen
        if (start) {
            const largestOpening = getLargestOpening(last)
            if (largestOpening) {
                newOpen = last.reduce(
                    (acc, item, i) => i >= largestOpening[0] && i <= largestOpening[1]
                        ? acc.concat(id)
                        : acc.concat(item),
                    []
                )
            } else {
                newOpen = last.concat(id)
            }
        } else {
            newOpen = last.map(
                itemId => itemId === id 
                    ? "EMPTY"
                    : itemId
            )
        }
        a.push(newOpen)
        return a
    }, []
)

const calculateXPosFromFrames = frames => frames.reduce(
    (a, row, frames) => {
        Object.entries(row.reduce(
            (acc, itemId, i) => {
                itemId !== "EMPTY" && (
                    acc[itemId]
                        ? (acc[itemId] = acc[itemId].add(i))
                        : (acc[itemId] = new Set())
                )
                return acc
            },
            {}
        )).forEach(
            ([itemId, indices]) => !a[itemId] && (
                (a[itemId] = { x1: Math.min(...indices) / row.length * 100, x2: Math.max(...indices) / row.length * 100 })
            )
        )
        return a
    },
    {}
)

const addXPosToData = (items, xPos) => items.map(
    item => ({ ...item, ...xPos[item.id] })
)

const addYPosToData = items => {
    const unixDayStart = Date.parse(new Date().toDateString())
    return items.map(
        item => {
            item.y1 = (item.start - unixDayStart) / 60 / 144
            item.y2 = (item.end - unixDayStart) / 60 / 144
            return item
        } 
    )
}

export default items => addYPosToData(
    addXPosToData(items, 
        calculateXPosFromFrames(
            getFrames(
                getTimeLines(items)
            )
        )
    )
)





