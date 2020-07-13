import React from 'react'

import { IconGenericProps } from './Icon.types'

import './Icons.scss'

export const IconChevron: React.FC<IconGenericProps> = (props) => {
    const { color, hoverColor } = props

    return (
        <svg width="22" height="22" viewBox="0 0 1024 1024">
            <path
                fill={color}
                d="M896 64v64h-128l-320 768h128v64h-448v-64h128l320-768h-128v-64z"
            ></path>
        </svg>
    )
}

// Icon.defaultProps = defaultProps
