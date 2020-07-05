import { createContext } from 'react'
import { ContextProps } from './List.types'
import { Selected } from './ListItem/ListItem.types'

export const ListContext = createContext<ContextProps<Selected>>({
    selected: null,
    setSelected: (selected: Selected) => selected,
})
