export interface CheckboxProps {
    /** @default false */
    checked: boolean

    /** @default  */
    value: string

    /** @default  */
    label?: string

    /** @default  */
    name?: string

    /** @default false */
    disabled?: boolean

    /** @default  */
    classes?: string

    onChange: (checked: boolean) => void
}

export const defaultProps: CheckboxProps = {
    checked: false,
    value: '',
    disabled: false,
    onChange: (state = false) => state,
}
