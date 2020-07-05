import React, { useContext } from 'react'
import { Selected } from './ListItem.types'
import { ListContext } from '../List.context'

export const ListItem: React.ComponentType<Selected> = ({ children, id, classes }) => {
    const { setSelected } = useContext(ListContext)

    const onSelected = () => {
        setSelected(id)
    }

    return (
        <li className={classes} onClick={onSelected} id={id}>
            {children}
        </li>
    )
}

export default ListItem
