export interface InputProps {
    /** @default '' */
    placeholder?: string

    /** @default ''' */
    value?: string

    /** @default ''' */
    name?: string

    /** @default 'text' */
    type?: string

    /** @default '' */
    hint?: string

    /** @default ''' */
    state?: 'error' | 'success' | 'hint' | 'none'

    onChange: (value: string) => void
}

export const defaultProps: InputProps = {
    placeholder: '',
    value: '',
    name: '',
    type: '',
    hint: '',
    state: 'hint',
    onChange: (value = '') => value,
}
