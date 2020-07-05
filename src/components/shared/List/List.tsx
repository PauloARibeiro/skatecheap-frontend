import React, { useState } from 'react'
import { ListContext } from './List.context'
import { List as IList } from './List.types'

export const List: React.ComponentType<IList> = ({ children, classes }) => {
    const [selected, setSelected] = useState(null)

    return (
        <ListContext.Provider value={{ selected, setSelected }}>
            <ul className={classes}>{children}</ul>
        </ListContext.Provider>
    )
}

export default List
