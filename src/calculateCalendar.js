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

const getSizes = times => times.reduce(
    (a, { id, start }) => {
        if (start) {
            a.open.add(id)            
            a.open.forEach(n => a.items.set(n, Math.max(a.items.get(n), a.open.size)))
            a.items.set(id, a.open.size)
            return a
        } else {
            a.open.delete(id)
            return a
        }
    }, { 
        open: new Set(), 
        items: new Map() 
    }
).items

export default calculateCalendar = items => {
    const sizes = getSizes(sortTimelines(getTimeLines(items)))
    return items.map(item => ({ ...item, size: sizes.get(item.id) }))
}




