import React from 'react'
import classnames from 'classnames'

import { TextProps, defaultProps } from './Text.types'

import './Text.scss'

export const Text: React.FC<TextProps> = (props) => {
    const { size, weight, family, classes, children, tag: Tag = 'span' } = props

    const styleClasses = classnames(
        `f-w-${weight}`,
        `f-s-${size}`,
        `f-f-${family}`,
        'font-base',
        classes,
    )

    return <Tag className={styleClasses}>{children}</Tag>
}

Text.defaultProps = defaultProps
