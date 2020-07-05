export interface ButtonProps {
    /** @default 'black' */
    color?: 'brand' | 'cta' | 'black'

    /** @default 'button' */
    type?: 'button' | 'submit'

    /** @default false */
    disabled?: boolean

    /** @default false */
    wide?: boolean

    /** @default  false */
    outline?: boolean

    /** @default  */
    classes?: string

    /** @ignore */
    children?: React.ReactNode
}

export const defaultProps: ButtonProps = {
    color: 'black',
    type: 'button',
    outline: false,
    disabled: false,
    wide: false,
}
