export interface TextProps {
    /** @default  'm' */
    size?: 'xs' | 'x' | 'm' | 'l'

    /** @default  300 */
    weight?: 300 | 400 | 700 | 800

    /** @default  'primary' */
    family?: 'primary' | 'secondary'

    /** @default  'span' */
    tag?: 'p' | 'span'

    /** @default  */
    classes?: string

    /** @ignore */
    children?: React.ReactNode
}

export const defaultProps: TextProps = {
    size: 'm',
    weight: 300,
    family: 'primary',
    tag: 'span',
}
