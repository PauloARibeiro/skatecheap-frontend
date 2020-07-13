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

    onChange: Function
}

export const defaultProps: CheckboxProps = {
    checked: false,
    value: '',
    disabled: false,
    onChange: (state: boolean) => state,
}
