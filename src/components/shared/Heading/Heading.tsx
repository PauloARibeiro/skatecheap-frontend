import React from 'react'
import classnames from 'classnames'

import { HeadingProps, defaultProps } from './Heading.types'

import './Heading.scss'

export const Heading: React.FC<HeadingProps> = (props) => {
    const { size: Size = 'h3', weight, family, classes, children } = props

    const styleClasses = classnames(
        `f-w-${weight}`,
        `${Size}`,
        `f-f-${family}`,
        'font-base',
        classes,
    ) 

    return <Size className={styleClasses}>{children}</Size>
}

Heading.defaultProps = defaultProps 
 