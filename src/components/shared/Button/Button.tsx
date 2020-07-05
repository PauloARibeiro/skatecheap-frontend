import * as React from 'react'
import classnames from 'classnames'

import { ButtonProps, defaultProps } from './Button.types'

import './Button.scss'

export const Button: React.FC<ButtonProps> = (props) => {
    const { color, type, outline, disabled, wide, classes, children = '' } = props

    const styleClasses = classnames(classes, color, {
        wide,
        [`${color}-outline`]: outline,
    })

    return (
        <button className={styleClasses} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

Button.defaultProps = defaultProps
