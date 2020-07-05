export interface HeadingProps {
    /** @default  'h3' */
    size?: 'h1' | 'h1' | 'h3' | 'h4' | 'h5'

    /** @default  300 */
    weight?: 300 | 400 | 700 | 800

    /** @default  'primary' */
    family?: 'primary' | 'secondary'

    /** @default  */
    classes?: string

    /** @ignore */
    children?: React.ReactNode
}

export const defaultProps: HeadingProps = {
    size: 'h3',
    weight: 300,
    family: 'primary',
}
