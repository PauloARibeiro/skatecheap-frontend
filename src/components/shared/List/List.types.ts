export interface List {
    classes?: string
    children?: React.ReactNode
}

export interface ContextProps<T> {
    selected: T | null
    setSelected: Function
}
