import React from 'react'

export default ({ gridArea, children }) => {
    const styles = {
        outerContainer: {
            gridArea,
            overflowY: 'scroll'
        },
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '300%'          
        },
        offSet: {
            flex: '1',
        }
    }
    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <div style={styles.offSet}></div>
                {children}
            </div>
        </div>
    )
}

