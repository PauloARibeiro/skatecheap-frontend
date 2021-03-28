import React from 'react'

import { IconGenericProps } from './Icon.types'

import './Icons.scss'

export const IconChevron: React.FC<IconGenericProps> = (props) => {
    const { color, hoverColor } = props

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
                <g data-name="arrow-ios-downward">
                    <rect width="24" height="24" opacity="0"/>
                    <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/>
                </g>
            </g>
        </svg>
    )
}
