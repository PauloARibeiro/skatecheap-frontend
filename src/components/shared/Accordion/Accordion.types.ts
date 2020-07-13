export interface AcordionProps {
    /** @default  */
    label?: string

    /** @default  */
    isOpen?: boolean

    /** @default  */
    classes?: string

    /** @ignore */
    children?: React.ReactNode

    // onToggle: Function
}

export const defaultProps: AcordionProps = {
    label: 'Example',
    isOpen: true,
    // onToggle: (state: boolean) => state,
}
